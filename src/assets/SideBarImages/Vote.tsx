const Vote: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="2"
        y="14"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="14"
        y="2"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="14"
        y="14"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
    </svg>
  );
};
export default Vote;
