import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./Component/AddPost/AddPost";
import LandingPage from "./Component/Landing-page/LandingPage";
import PostView from "./Component/Post-view/PostView";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/view" element={<PostView/>} />
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
