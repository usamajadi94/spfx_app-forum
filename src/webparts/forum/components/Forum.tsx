import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import PostDetailView from "./PostDetailView";
import React from 'react';

const Forum = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postDetailView" element={<PostDetailView />} />
      </Routes>
    </HashRouter>
  );
};

export default Forum;