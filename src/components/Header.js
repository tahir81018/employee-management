import { ToastContainer } from "react-toastify";
import NavigationBar from "./Navigationbar";

export default function Header(props) {
  return (
    <>
      <NavigationBar />
      <ToastContainer />
    </>
  );
}
