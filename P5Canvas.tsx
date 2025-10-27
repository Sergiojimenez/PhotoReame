import React, { useRef, useEffect } from 'react';

// Inform TypeScript that p5 will be available on the window object.
declare global {
  interface Window {
    p5: any;
  }
}

const P5Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !window.p5) return;

    const sketch = (p: any) => {
      let nodes: Node[] = [];
      const numNodes = 50; // Increased nodes for more density
      const connectionDistance = 180; // Increased connection distance
      const mouseRepelDistance = 100;

      class Node {
        pos: any; // p5.Vector
        vel: any; // p5.Vector
        baseSize: number;
        size: number;
        
        constructor() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(p.random(-0.3, 0.3), p.random(-0.3, 0.3));
          this.baseSize = p.random(2, 5);
          this.size = this.baseSize;
        }

        update() {
          // Mouse interaction - repel
          let mouseVec = p.createVector(p.mouseX, p.mouseY);
          let d = p.dist(this.pos.x, this.pos.y, mouseVec.x, mouseVec.y);
          if (d < mouseRepelDistance) {
              let repel = p.createVector(this.pos.x - mouseVec.x, this.pos.y - mouseVec.y);
              repel.setMag(p.map(d, 0, mouseRepelDistance, 0.5, 0));
              this.pos.add(repel);
          }
          
          this.pos.add(this.vel);
          this.edges();

          // Pulsing effect
          this.size = this.baseSize + p.sin(p.frameCount * 0.05 + this.pos.x * 0.1) * 1.5;
        }

        display() {
          p.noStroke();
          // Brighter, more vibrant red
          p.fill(255, 69, 58, 180); 
          p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
        }

        edges() {
          if (this.pos.x > p.width) this.pos.x = 0;
          else if (this.pos.x < 0) this.pos.x = p.width;
          if (this.pos.y > p.height) this.pos.y = 0;
          else if (this.pos.y < 0) this.pos.y = p.height;
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current!);
        for (let i = 0; i < numNodes; i++) {
          nodes.push(new Node());
        }
      };

      p.draw = () => {
        p.background(11, 15, 25);
        
        // Connect nodes to mouse
        for (let i = 0; i < nodes.length; i++) {
            const d = p.dist(p.mouseX, p.mouseY, nodes[i].pos.x, nodes[i].pos.y);
            if (d < connectionDistance + 50) { // Larger distance for mouse
                const alpha = p.map(d, 0, connectionDistance + 50, 60, 0);
                p.stroke(255, 255, 255, alpha); // White lines to mouse
                p.strokeWeight(1);
                p.line(p.mouseX, p.mouseY, nodes[i].pos.x, nodes[i].pos.y);
            }
        }

        for (let i = 0; i < nodes.length; i++) {
          nodes[i].update();
          nodes[i].display();
          
          for (let j = i + 1; j < nodes.length; j++) {
            const d = p.dist(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
            if (d < connectionDistance) {
              const alpha = p.map(d, 0, connectionDistance, 70, 0);
              p.stroke(255, 69, 58, alpha); // Brighter red lines
              p.strokeWeight(1);
              p.line(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
            }
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new window.p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default P5Canvas;