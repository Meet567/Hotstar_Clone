import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";



function App2() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App2;
