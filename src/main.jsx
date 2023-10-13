import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/root.jsx'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
