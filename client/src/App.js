import "./App.css";
import Layout from "./widgets/Layout";
import LayoutAdmin from "./widgets/layoutAdmin";
import { Routes, Route, useNavigate } from "react-router-dom";
import TvShows from "./pages/TvShows";
import {
  Home,
  Movie,
  VideoDetail,
  Profile,
  Payment,
  Notfound,
  ListFilm,
  IncomingTransaction,
  AddFilm,
  PrivateRoute,
  NotAdmin
} from "./pages";
import { API, setAuthToken } from "./config/api";
import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { useEffect } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const [isLogged, setIsLogged] = useState(false);

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

  //   const isAdmin = state.isAdmin;
  //   if (isAdmin) setIsLogged(true);
  // }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      // return console.log("response",response.data.data)
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);


  return (
    <Routes>
      <Route />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/tvshows"
        element={
          <Layout>
            <TvShows />
          </Layout>
        }
      />

      <Route
        path="/movies"
        element={
          <Layout>
            <Movie />
          </Layout>
        }
      />

      <Route
        path="/video/:id"
        element={
          <Layout>
            <VideoDetail />
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />

      <Route
        path="/payment"
        element={
          <Layout>
            <Payment />
          </Layout>
        }
      />

      <Route
        path="/admin"
        element={
          <LayoutAdmin>
            <IncomingTransaction />
          </LayoutAdmin>
        }
      />

      <Route element={<PrivateRoute isLogged={isLogged} />}>
        <Route
          path="/list-film"
          element={
            <LayoutAdmin>
              <ListFilm />
            </LayoutAdmin>
          }
        />
      </Route>

      <Route element={<PrivateRoute isLogged={isLogged} />}>
      <Route
        path="/add-film"
        element={
          <LayoutAdmin>
            <AddFilm />
          </LayoutAdmin>
        }
      />

      </Route>

      <Route
        path="/comeback"
        element={
          <Layout>
            <NotAdmin />
          </Layout>
        }
      />

      <Route 
        path='list-transaction' 
        element={
          <LayoutAdmin>
            <IncomingTransaction />
          </LayoutAdmin>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <Notfound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
