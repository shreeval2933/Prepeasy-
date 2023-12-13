import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./componets/Homepage";
import Profile from "./componets/Profile";
import Login from "./Login";
import List from "./componets/list/List";
import Documnet from "./componets/Documnet";
import Utube from "./componets/Utube";
import Dropzone from "./componets/Dropzone";
import ListPage from "./componets/pages/ListPage";
import DetailedContent from "./componets/pages/DetailedContent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/documents" element={<Documnet />}></Route>
        <Route path="/utube" element={<Utube />}></Route>
        <Route path="/dropzone" element={<Dropzone />}></Route>
        <Route path="/listpage" element={<ListPage />}></Route>
        <Route
          path="/detailedcontent/:id"
          element={<DetailedContent />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
