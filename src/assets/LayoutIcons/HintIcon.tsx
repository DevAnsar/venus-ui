const HintIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8c0-3.864 3.136-7 7-7s7 3.136 7 7-3.136 7-7 7-7-3.136-7-7Z"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
      <rect x="7" y="7" width="2" height="5" rx="1" fill="currentColor"></rect>
      <rect x="7" y="4" width="2" height="2" rx="1" fill="currentColor"></rect>
    </svg>
  );
};
export default HintIcon;
