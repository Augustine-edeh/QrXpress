import Button from "../../UI/Button";

function Home() {
  return (
    <>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-20">
        <Button route={"/scanQR"}>Scan QR-code</Button>
        <Button route={"/createQR"}>Create QR-code</Button>
      </div>
    </>
  );
}

export default Home;
