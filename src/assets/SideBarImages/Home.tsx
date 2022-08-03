const HomeIcon : React.FC<{className?: string}> = ({className}) => {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14a4 4 0 0 1 4 4v5H8v-5a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
      <path
        d="M1 11.422a5 5 0 0 1 1.892-3.917l7.243-5.748a3 3 0 0 1 3.73 0l7.243 5.748A5 5 0 0 1 23 11.422V18a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5v-6.578Z"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </svg>
  );
};
export default HomeIcon;
