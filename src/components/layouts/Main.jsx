import { Outlet } from "react-router";
import Navbar from "../Navbar";
import { store } from "../../RTK/store";
import { Provider } from "react-redux";
export default function MainLayout() {
  return (
    <Provider store={store}>
      <div className="w-full flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}
