import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import PruductDetails from "./pages/PruductDetails/PruductDetails copy";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [chosenCategories, setChosenCategories] = useState([]);
  useEffect(() => {
    const res = async () => {
      const result = await axios
        .get("https://fakestoreapi.com/products")
        .then((rec) => {
          setData(rec.data);
          setChosenCategories(rec.data);
        })
        .catch((err) => setError(err.message));
      return result;
    };
    res();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              error={error}
              setChosenCategories={setChosenCategories}
              chosenCategories={chosenCategories}
            />
          }
        />

        <Route
          path="/productDetail/:id"
          element={
            <PruductDetails
              data={data}
              error={error}
              chosenCategories={chosenCategories}
              setChosenCategories={setChosenCategories}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
