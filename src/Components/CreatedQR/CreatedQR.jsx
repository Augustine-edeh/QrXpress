import Button from "../UI/Button";
const CreatedQR = () => {
  const file =
    "https://api.qrserver.com/v1/create-qr-code/?data=HelloWorlssdhsdhfifd&amp;size=100x100";
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
          href={file}
          className="w-full bg-gray-100 border border-gray-500 mt-5 px-3 py-1"
          download
        >
          Download QR
        </button>
      </div>
    </>
  );
};

export default CreatedQR;
