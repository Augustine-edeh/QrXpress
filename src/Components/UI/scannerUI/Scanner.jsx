import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const Scanner = () => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      /* handle success */
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    // If you want to prefer front camera
    // html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

    // If you want to prefer back camera
    html5QrCode.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccessCallback
    );
  }, []);

  return (
    <>
      <p>Scanner Page</p>
      <div id="reader">dfghf</div>
    </>
  );
};

export default Scanner;
