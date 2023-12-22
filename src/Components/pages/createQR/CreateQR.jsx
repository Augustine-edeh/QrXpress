import Button from "../../UI/Button";
import PageTitle from "../../UI/PageTitle";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateQR = () => {
  const [routeName, setRouteName] = useState("");

  const enteredValueRef = useRef();
  const navigate = useNavigate();

  const createQrHandler = () => {
    const enteredValue = enteredValueRef.current.value;
    if (enteredValue.trim().length > 0) {
      console.log("Yesterday!");
      setRouteName("/output"); // Saving the route to state
    } else {
      alert("Enter valid text");
      // display a passive (validation) error message UI 'Enter a valid text'
    }
  };

  useEffect(() => {
    // Use the saved route from state to navigate
    if (routeName) {
      navigate(routeName, {
        state: { enteredValue: enteredValueRef.current.value },
      });
    }
  }, [routeName, navigate]);

  return (
    <section className="">
      <PageTitle>Create Qr-Code</PageTitle>
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
            ref={enteredValueRef}
          />
        </form>
        <Button onCreateQR={createQrHandler} additionalStyles={"h-1/6"}>
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
