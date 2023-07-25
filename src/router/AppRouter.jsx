import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { LabNotesRoutes } from "../labnotes/routes/LabNotesRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* login y registro */}
      <Route path='/auth/*' element={<AuthRoutes />} />

      {/* lab notes */}
      <Route path='/*' element={<LabNotesRoutes />} />
    </Routes>
  );
};
