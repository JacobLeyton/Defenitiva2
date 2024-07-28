import { Navigate, Route, Routes } from "react-router-dom";
import { AnimePage } from "../page/AnimePage";
import { ComicPage } from "../page/ComicPage";
import { HeroPage } from "../page/HeroPage";
import { Footer } from "../../ui/components/Footer";
import { HomePage } from "../page/HomePage";
import { Navbar } from "../../ui/components/Navbar";

export const HeroesRoutes = () => {
  console.log("HeroesRoutes renderizado");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="anime" element={<AnimePage />} />
        <Route path="comics" element={<ComicPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
      </Routes>
      <Footer />
    </>
  );
};



