
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./Theme/DarkTheme";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./component/Home/Home";
import RestaurantDetail from "./component/Restaurant/RestaurantDetail";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
import Auth from "./component/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./component/State/Store";
import { useEffect } from "react";
import { getUser } from "./component/State/Authentication/Action";
import { findCart } from "./component/State/Cart/Action";
import Router from "./Routers/Router";
import { getRestaurantByUserId } from "./component/State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((store) => store.auth);
  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart(jwt));
    }
  }, [jwt]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
      <Auth />
    </ThemeProvider>
  );
}

export default App;
