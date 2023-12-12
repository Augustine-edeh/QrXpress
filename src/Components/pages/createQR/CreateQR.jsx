import Button from "../../UI/Button";

const CreateQR = () => {
  const createQrHandler = () => {
    const enteredValue = document.querySelector("#input").value;
    alert(enteredValue);
  };
  return (
    <section className="">
      <h1 className="text-center">Create QR-code</h1>
      <div className="bg-blue-300 h-96 p-3 text-center flex flex-col place-content-center gap-2 rounded">
        <form className="h-5/6 grid place-content-center">
          <p className="text-left">
            <label htmlFor="input" className="font-bold text-xl">
              Enter Text:
            </label>
          </p>
          <textarea
            placeholder="Enter Text here..."
            name=""
            id="input"
            cols="29"
            rows="10"
            className="resize-none rounded p-4 my-2 outline-double outline-1 focus:outline-green-700"
          />
          {/* <input type="textarea" id="input" className="h-10" /> */}
        </form>
        <Button additionalStyles={"h-1/6"} onCreateQR={createQrHandler}>
          Create QR
        </Button>
      </div>
      <Button route="/scanQR" additionalStyles={"mt-4 w-full"}>
        Scan QR-code
      </Button>
    </section>
  );
};

export default CreateQR;
