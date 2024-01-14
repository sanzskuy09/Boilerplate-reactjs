import Routes from "./router";

import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

export default function AppLayout() {
  // const [user, setUser] = useState();
  // const navigate = useNavigate();

  return (
    <>
      <ToastContainer position="top-center" />

      <div className="flex">
        <Navbar />

        <div className="w-full p-8 bg-background">
          <Routes />
        </div>
      </div>
    </>
  );
}
