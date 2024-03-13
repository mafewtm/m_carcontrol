import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import App from "./App.tsx";
import { debugData } from "./utils/debugData";
import { isEnvBrowser } from "./utils/misc";

debugData([
  {
    action: "setVisible",
    data: "show-ui",
  },
]);

if (isEnvBrowser()) {
  const root = document.getElementById('root');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.height = "100%";
  root!.style.backgroundSize = "cover";
  root!.style.backgroundRepeat = "no-repeat";
  root!.style.backgroundPosition = "center";
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
