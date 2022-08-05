import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "components/Spinner/Spinner";

const Layout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/Movies/MovieDetails/MovieDetails'));
const Cast = lazy(() => import("pages/Movies/MovieDetails/Cast/Cast"));
const Reviews = lazy(() => import("pages/Movies/MovieDetails/Reviews/Reviews"));

export const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Layout />}>                          
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
