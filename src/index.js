import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import { NavigatioProvider } from './context/navigation';




const el = document.getElementById("root");
const root = createRoot(el);
root.render(
  <NavigatioProvider>
    <App/>
  </NavigatioProvider>
);
