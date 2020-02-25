import { Hello } from "components/Hello";
import * as ReactDOM from "react-dom";
import * as React from "react";

ReactDOM.render(
    <Hello
        framework="React"
        compiler="Typescript"
        bundler="Webpack"
    />,
    document.getElementById("root")
);