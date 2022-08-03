const MarketIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="9"
        width="5"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="10"
        y="1"
        width="5"
        height="22"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="19"
        y="17"
        width="4"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
    </svg>
  );
};
export default MarketIcon;
