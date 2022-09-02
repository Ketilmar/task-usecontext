import { Routes, Route } from "react-router-dom";
import SumPage from "../pages/sumPage";
import SumPage2 from "../pages/sumPage2";

const RoutesFile = () => {
  return (
    <>
      <Routes>
        <Route path="/sumpage" element={<SumPage />} />
        <Route path="/sumpage2" element={<SumPage2 />} />
      </Routes>
    </>
  );
};

export { RoutesFile };
