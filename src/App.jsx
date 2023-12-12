import { Routes, Route } from "react-router-dom";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Home from "./Components/UI/Home";
import Scanner from "./Components/UI/scannerUI/Scanner";
const App = () => {
  // || Checking if device is mobile
  // function isMobile() {
  //   const regex =
  //     /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  //   return regex.test(navigator.userAgent);
  // }
  // if (isMobile()) {
  //   console.log("Mobile device detected");
  // } else {
  //   console.log("Desktop device detected");
  // }
  // isMobile();

  return (
    <div className="bg-gradient-to-bl from-cyan-100 to-blue-200">
      <Header />
      <main className="w-screen h-[100dvh] grid place-content-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanQR" element={<Scanner />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
