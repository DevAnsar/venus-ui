const History: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m16.345 6.606 3.695.01.01-3.694"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M21.158 11.517A9.579 9.579 0 1 1 19.5 6.13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M11.5 7.5v4L15 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
export default History;
