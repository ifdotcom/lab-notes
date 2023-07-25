import { Navigate, Route, Routes } from "react-router-dom";
import { LabNotesPage } from "../pages/LabNotesPage";

export const LabNotesRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LabNotesPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
