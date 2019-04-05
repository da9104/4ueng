import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/main.scss";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";

// Framework7.use(Framework7React);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
