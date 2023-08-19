import React from "react";
import ReactDOM from "react-dom/client";
import { DependenciesContext } from "dependenciescontext";
import { ContactPage } from "contact-page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactPage />
  </React.StrictMode>
);
