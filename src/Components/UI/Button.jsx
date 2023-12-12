import { useNavigate } from "react-router-dom";
function Button({ children, route }) {
  const navigate = useNavigate();
  const navigateTo = () => navigate(route);
  return (
    <button
      className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:shadow-lg 
focus:opacity-[0.85] hover:shadow-blue-300 focus:bg-blue-600"
      onClick={navigateTo}
    >
      {children}
    </button>
  );
}

export default Button;
