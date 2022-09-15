import "./App.css";
import Layout from "./widgets/Layout";
import LayoutAdmin from "./widgets/layoutAdmin";
import {Routes, Route } from "react-router-dom";
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

function App() {



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
