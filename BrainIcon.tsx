import React from 'react';

const BrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44l-.24-.95a2.5 2.5 0 0 0-4.6-.04L2 20.44A2.5 2.5 0 0 1 0 19.5v-15A2.5 2.5 0 0 1 2.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44l.24-.95a2.5 2.5 0 0 1 4.6-.04L22 20.44A2.5 2.5 0 0 0 24 19.5v-15A2.5 2.5 0 0 0 21.5 2Z" />
  </svg>
);

export default BrainIcon;
