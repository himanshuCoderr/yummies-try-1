import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AppetizerPage from "./Pages/AppetizerPage";
import VegPage from "./Pages/VegPage";
import DessertsPage from "./Pages/DessertsPage";
import NonVegPage from "./Pages/NonVegPage";
import ChineesePage from "./Pages/ChineesePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import MyCartPage from "./Pages/MyCartPage";
// import SignUpPage from "./Pages/SignUpPage";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import BreakFastPage from "./Pages/BreakFastPage";
import SignUpPage from "./Pages/SignUpPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/userProfile",
    element: <ProfilePage />,
  },
  {
    path: "/myCart",
    element: <MyCartPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/appetizer",
    element: <AppetizerPage />,
  },
  {
    path: "/veg",
    element: <VegPage />,
  },
  {
    path: "/nonveg",
    element: <NonVegPage />,
  },
  {
    path: "/desserts",
    element: <DessertsPage />,
  },
  {
    path: "/breakfast",
    element: <BreakFastPage />,
  },
  {
    path: "/chineese",
    element: <ChineesePage />,
  },
]);

function App() {
  return (
    <div className=" ">
      {/* <Home /> */}
      {/* <AppetizerPage /> */}
      {/* <VegPage /> */}
      {/* <DessertsPage /> */}
      {/* <NonVegPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
