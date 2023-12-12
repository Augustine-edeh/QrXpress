import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";
import Button from "../../UI/Button";
function ImageFileScanner() {
  // return <input type="file" id="qr-input-file" accept="image/*" />;

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    // File based scanning
    const fileinput = document.getElementById("qr-input-file");
    fileinput.addEventListener("change", (e) => {
      if (e.target.files.length == 0) {
        // No file selected, ignore
        return;
      }

      const imageFile = e.target.files[0];
      // Scan QR Code
      html5QrCode
        .scanFile(imageFile, true)
        .then((decodedText) => {
          // success, use decodedText
          setTimeout(() => alert("DecodedText: " + decodedText), 2000); // add 2sec delay before alerting decodedText
          console.log(decodedText);
        })
        .catch((err) => {
          // failure, handle it.
          console.log(`Error scanning file. Reason: ${err}`);
        });
    });
  }, []);
  return (
    <>
      <div id="reader" className="flex flex-wrap place-content-center"></div>
      <input
        type="file"
        id="qr-input-file"
        accept="image/*"
        className="bg-blue-300 mx-auto "
      />
      <Button route={"/scanQR"} additionalStyles={"mt-5"}>
        Scan using Camera
      </Button>
    </>
  );
}

export default ImageFileScanner;
