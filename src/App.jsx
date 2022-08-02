import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { Cast } from "./components/Cast/Cast";
import { Reviews } from "./components/Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>                          
          <Route path="/" element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
