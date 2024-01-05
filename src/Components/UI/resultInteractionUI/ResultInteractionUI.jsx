const resultInteractionUI = ({ icon, children }) => {
  const rightChevronIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
  return (
    <button className="flex w-full gap-3 bg-red-200 justify-between">
      <div className="flex gap-2">
        <span>{icon}</span> <p>{children}</p>
      </div>
      <p>{rightChevronIcon}</p>
    </button>
  );
};

export default resultInteractionUI;
