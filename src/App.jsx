import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-bl from-cyan-100 to-blue-200">
      <Header />
      <main className="w-screen h-screen grid place-content-center">
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-20">
          <button
            className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:shadow-lg 
        focus:opacity-[0.85]  hover:shadow-blue-300 focus:bg-blue-600"
          >
            Generate QR-code
          </button>
          <button className="bg-blue-800 text-white py-3 px-6 rounded-lg">
            Scan QR-code
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
