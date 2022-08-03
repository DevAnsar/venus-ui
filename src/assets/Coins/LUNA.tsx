const Icon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="rgba(149, 151, 161, 1)"
      className={className}
    >
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        fill="#172852"
      ></path>
      <path
        d="M10.055 6.469c1.17-.438 2.489-.439 3.682-.079 1.553.482 2.864 1.654 3.549 3.125.189.419.37.856.388 1.322-.873-.506-1.83-.834-2.79-1.133-1.533-.553-3.14-.937-4.591-1.697-.338-.202-.77-.409-.861-.83-.037-.364.348-.567.623-.708ZM6.52 10.01c.339-.92.895-1.775 1.65-2.408.192 1.58.864 3.105 1.974 4.253 1.331 1.383 3.227 2.232 5.156 2.2.766.024 1.515-.153 2.262-.296-.735 2.656-3.646 4.42-6.343 3.995-1.628-.208-3.131-1.172-4.038-2.533-1.023-1.504-1.281-3.5-.661-5.212Z"
        fill="#FFD83D"
      ></path>
      <path
        d="M14.885 9.704c.959.299 1.916.627 2.789 1.133l.059.031c.081.609.14 1.23.032 1.84-.439-.186-.795-.513-1.167-.802-.716-.596-1.447-1.278-1.713-2.202Z"
        fill="#FF6F03"
      ></path>
    </svg>
  );
};
export default Icon;