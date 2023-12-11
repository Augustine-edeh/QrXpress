import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const Scanner = () => {
  useEffect(() => {
    // This method will trigger user permissions
    // Html5Qrcode.getCameras()
    //   .then((devices) => {
    //     /**
    //      * devices would be an array of objects of type:
    //      * { id: "id", label: "label" }
    //      */
    //     if (devices && devices.length) {
    //       var cameraId = devices[0].id;
    //       // .. use this to start scanning.
    //       const html5QrCode = new Html5Qrcode("reader");
    //       html5QrCode
    //         .start(
    //           cameraId,
    //           {
    //             fps: 10, // Optional, frame per seconds for qr code scanning
    //             qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
    //           },
    //           (decodedText, decodedResult) => {
    //             // do something when code is read
    //           },
    //           (errorMessage) => {
    //             // parse error, ignore it.
    //           }
    //         )
    //         .catch((err) => {
    //           // Start failed, handle it.
    //         });
    //     }
    //   })
    //   .catch((err) => {
    //     // handle err
    //   });

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

    // // Select front camera or fail with `OverconstrainedError`.
    // html5QrCode.start(
    //   { facingMode: { exact: "user" } },
    //   config,
    //   qrCodeSuccessCallback
    // );

    // // Select back camera or fail with `OverconstrainedError`.
    // html5QrCode.start(
    //   { facingMode: { exact: "environment" } },
    //   config,
    //   qrCodeSuccessCallback
    // );
  }, []);

  return (
    <>
      <p>Scanner Page</p>
      {/* <p>{html5QrcodeScanner.cameraScanImage.alt}</p>
      <div>{console.log(html5QrcodeScanner)}</div> */}
      <div id="reader">dfghf</div>
    </>
  );
};

export default Scanner;
