import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/scanQR");

  return (
    <>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-20">
        <button
          className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:shadow-lg 
        focus:opacity-[0.85]  hover:shadow-blue-300 focus:bg-blue-600"
        >
          Generate QR-code
        </button>
        <button
          className="bg-blue-800 text-white py-3 px-6 rounded-lg"
          onClick={clickHandler}
        >
          Scan QR-code
        </button>
      </div>
    </>
  );
}

export default Home;
