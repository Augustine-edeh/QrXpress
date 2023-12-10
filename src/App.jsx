import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Home from "./Components/UI/Home";

const App = () => {
  return (
    <div className="bg-gradient-to-bl from-cyan-100 to-blue-200">
      <Header />
      <main className="w-screen h-[100dvh] grid place-content-center">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
