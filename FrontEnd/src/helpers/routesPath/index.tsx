/**
 * Component representing the main routes of the application.
 *
 * @component
 * @returns {JSX.Element} - The rendered RoutesPath component.
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Profil from "../../pages/profil";
import NotFound from "../../pages/notFound";
import Community from "../../pages/community";
import Settings from "../../pages/settings";

const RoutesPath: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesPath;
