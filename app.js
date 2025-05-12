import React from "react";
import ReactDOM from "react-dom/client";  // Correct import for React 18+
import Increment from "./increment";
/*const header = (
    <h1>Hello Guru</h1>
);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Increment/>);
