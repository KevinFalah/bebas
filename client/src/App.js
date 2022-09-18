import "./App.css";
import Layout from "./widgets/Layout";
import LayoutAdmin from "./widgets/layoutAdmin";
import {Routes, Route, useNavigate } from "react-router-dom";
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
  AddEpisode,
} from "./pages";
import { API, setAuthToken } from './config/api';
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useEffect } from "react";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if(localStorage.token) {
      setAuthToken(localStorage.token)
    }
  }, [state]);

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
          path="/video"
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

        <Route
          path="/list-film"
          element={
            <LayoutAdmin>
              <ListFilm />
            </LayoutAdmin>
          }
        />
        <Route
          path="/add-film"
          element={
            <LayoutAdmin>
              <AddFilm />
            </LayoutAdmin>
          }
        />
        <Route
          path="/add-episode"
          element={
            <LayoutAdmin>
              <AddEpisode />
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
