import Button from "../UI/Button";
import { useLocation } from "react-router-dom";
const CreatedQR = (props) => {
  const { state } = useLocation();
  const { enteredValue } = state; // Read values passed on state
  console.log(enteredValue);
  // const { data } = props.location.state;
  // console.log(data);

  const file = `https://api.qrserver.com/v1/create-qr-code/?data=${enteredValue}&amp;size=100x100;`;

  async function downloadHandler() {
    // const file =
    //   "https://api.qrserver.com/v1/create-qr-code/?data=testing_My_QRcode_scanner_Projesct&amp;size=100x100";
    const image = await fetch(file);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    // console.log(imageURL);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "generated-QR";
    document.body.appendChild(link);
    link.click(() => alert("clicked!"));
    document.body.removeChild(link);
  }
  return (
    <>
      <div className="flex flex-col">
        <Button
          route={"/createQR"}
          additionalStyles={
            "bg-gray-500 font-bold ml-auto rounded-md py-1 px-6 mb-2"
          }
        >
          Back
        </Button>
        <img src={file} alt="QR" title="" />
        <button
          onClick={downloadHandler}
          className="w-full bg-gray-100 border border-gray-500 mt-5 px-3 py-1"
          allow-downloads="true"
        >
          Download QR
        </button>
      </div>
    </>
  );
};

export default CreatedQR;
