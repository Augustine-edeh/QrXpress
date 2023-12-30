const Modal = () => {
  const DATE = new Date();
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthList[DATE.getMonth()],
    date = DATE.getDate(),
    year = DATE.getFullYear();

  const formattedDate = `${month} ${date}, ${year}`;

  return (
    <>
      <div className="flex gap-3">
        <button className="outline outline-red-200">{"<--"}</button>
        <span>Result</span>
      </div>
      <section className="flex flex-col gap-5 mt-5">
        <div className="rounded-md w-80 p-3 bg-red-300">
          <p className="text-gray-500 mb-3">Decoded Text:</p>
          <p className="p-0 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            ullam nulla voluptate reiciendis. Provident, cupiditate nisi neque
            voluptatem enim.
          </p>
          <p className="mt-5">{formattedDate}</p>
        </div>
        <div className="rounded-md w-80 p-3 bg-red-300 ">
          <ul>
            <button className="flex gap-3">
              <span>Icon</span> <p>Search Web</p>
            </button>

            <button className="flex gap-3">
              <span>Icon</span> <p>Copy</p>
            </button>
            <button className="flex gap-3">
              <span>Icon</span> <p>Share</p>
            </button>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Modal;
