import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigateTo = useNavigate();
  const { decodedText } = useLocation().state;
  // console.log("Hey Bro!!");
  // console.log(decodedText);

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

  // Icons
  const webIcon = (
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
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );

  const copyIcon = (
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
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
      />
    </svg>
  );

  const shareIcon = (
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
        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      />
    </svg>
  );

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

  const backIcon = (
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
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );

  // clickHandlers
  const copyHandler = () => {
    navigator.clipboard.writeText(decodedText).then(
      () => {
        console.log("Result Copied!");
        /* Resolved - text copied to clipboard successfully */
      },
      () => {
        console.error("Failed to copy");
        /* Rejected - text failed to copy to the clipboard */
      }
    );
  };

  return (
    <div className="bg-blue-400 p-2 rounded-xl">
      <div className="flex gap-5 items-center bg-blue-300 rounded">
        <button className="p-2" onClick={() => navigateTo("/")}>
          {backIcon}
        </button>
        <span className="text-xl">Result</span>
      </div>
      <div className="flex flex-col gap-5 mt-5 min-w-[20rem]">
        <section className="rounded-md p-3 bg-blue-300 min-w-fit">
          <p className="text-gray-500 mb-3">Decoded Text:</p>
          <p className="p-0 md:text-lg">{decodedText}</p>
          <p className="mt-5">{formattedDate}</p>
        </section>

        <section className="rounded-md">
          <ul className="flex flex-col gap-0.5">
            <button className="flex w-full gap-3 bg-blue-300 justify-between rounded-lg p-3">
              <div className="flex gap-2">
                <span>{webIcon}</span> <p>Search Web</p>
              </div>
              <p className="">{rightChevronIcon}</p>
            </button>
            <button
              onClick={copyHandler}
              className="flex w-full gap-3 bg-blue-300 justify-between rounded-lg p-3"
            >
              <div className="flex gap-2">
                <span>{copyIcon}</span> <p>Copy</p>
              </div>
              <p className="">{rightChevronIcon}</p>
            </button>
            <button className="flex w-full gap-3 bg-blue-300 justify-between rounded-lg p-3">
              <div className="flex gap-2">
                <span>{shareIcon}</span> <p>Share</p>
              </div>
              <p className="">{rightChevronIcon}</p>
            </button>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Result;
