import * as React from "react";
import { HomePage } from "./pages/HomePage";

export default class App extends React.Component {

    public render () {
        return (
            <div className="app-content">
                <HomePage />
            </div>
        );
    }
}
