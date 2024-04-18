import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../components/DetailsPage";
import Error404 from "../components/Error404";
import Home from "../components/Home";
import AddOwner from "../components/owner/AddOwner";
import Owners from "../components/owner/Owners";
import UpdateOwner from "../components/owner/UpdateOwner";
import Petshop from "../components/petshop/Petshop";
import Veterinarians from "../components/veterinarians/Veterinarians";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/owners" element={<Owners />} />
      <Route path="/owners/add" element={<AddOwner />} />
      <Route path="/owners/:id" element={<DetailsPage />} />
      <Route path="/owners/:id/update" element={<UpdateOwner />} />
      <Route path="/veterinarians" element={<Veterinarians />} />
      <Route path="/petshop" element={<Petshop />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default MainRoutes;
