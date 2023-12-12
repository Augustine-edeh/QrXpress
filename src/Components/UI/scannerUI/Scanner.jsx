import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const Scanner = () => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    const onScannSuccess = (decodedText, decodedResult) => {
      /* handle success */
      console.log("Text:", decodedText);
      console.log("Result:", decodedResult);

      //   Stop Scamming and remove Camera  UI
      html5QrCode
        .stop()
        .then((ignore) => {
          // QR Code scanning is stopped.
        })
        .catch((err) => {
          // Stop failed, handle it.
        });
    };

    // If you want to prefer front camera
    // html5QrCode.start({ facingMode: "user" }, config, onScannSuccess);

    // If you want to prefer back camera
    html5QrCode.start({ facingMode: "environment" }, config, onScannSuccess);
  }, []);

  return (
    <>
      <p>Scanner Qr Code</p>
      <div id="reader">dfghf</div>
    </>
  );
};

export default Scanner;
