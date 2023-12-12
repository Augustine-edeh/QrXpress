import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Home from "./Components/UI/Home";
import Scanner from "./Components/UI/scannerUI/Scanner";
// import Html5QrcodeScanner from "html5-qrcode";
const App = () => {
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }

  // let html5QrcodeScanner = new Html5QrcodeScanner(
  //   "reader",
  //   { fps: 10, qrbox: { width: 250, height: 250 } },
  //   /* verbose= */ false
  // );
  // html5QrcodeScanner.render(onScanSuccess, onScanFailure);

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
        <Scanner />
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
