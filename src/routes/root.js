import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
