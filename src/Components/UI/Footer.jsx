function Footer() {
  return (
    <footer className="bg-transparent flex place-content-center py-5">
      <p>
        Built with{" "}
        <a
          className="text-yellow-600 hover:underline underline-offset-4"
          href="https://www.npmjs.com/package/html5-qrcode/v/2.1.5"
          target="_blank"
          rel="noreferrer"
        >
          Html5-QRCode
        </a>{" "}
        By{" "}
        <a
          className="text-blue-800 hover:underline underline-offset-4"
          href="https://x.com/Augustine_edeh"
          target="_blank"
          rel="noreferrer"
        >
          Augustine
        </a>
      </p>
    </footer>
  );
}

export default Footer;
