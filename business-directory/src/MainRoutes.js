import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Business from "./business/Business";
import BusinessName from "./business-name/BusinessName";

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/business" element={<Business />} />
      <Route path="/business/:businessId" element={<BusinessName />} />
      <Route path="*" element={<Navigate to="/business" />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
