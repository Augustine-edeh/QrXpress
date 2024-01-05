import { Routes, Route } from "react-router-dom";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Home from "./Components/pages/home/Home";
import Scanner from "./Components/pages/cameraScanner/CameraScanner";
import CreateQR from "./Components/pages/createQR/CreateQR";
import ImageFileScanner from "./Components/pages/ImageFileScanner/ImageFileScanner";
import CreatedQR from "./Components/CreatedQR/CreatedQR";
import Modal from "./Components/UI/result/Result";

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
    <div className="h-screen bg-gradient-to-bl from-cyan-100 to-blue-200">
      <Header />
      <main className="h-full grid place-content-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanQR" element={<Scanner />} />
          <Route path="/createQR" element={<CreateQR />} />
          <Route path="/scan-image-file" element={<ImageFileScanner />} />
          <Route path="/output" element={<CreatedQR />} />
          <Route path="/result" element={<Modal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
