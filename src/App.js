import React from "react";
import ReactDOM from 'react-dom/client';
import FetchImage from "./Components/FetchImage";


export default function App() {

  const pass = "https://placekitten.com/200/200";

  return (
    <div>
      <FetchImage
        url={pass} />
    </div>
  );
}
