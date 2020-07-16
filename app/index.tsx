import * as React from "react";
import * as ReactDOM from "react-dom";
import Modal from "react-modal";

import App from "./app";

Modal.setAppElement("#root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
