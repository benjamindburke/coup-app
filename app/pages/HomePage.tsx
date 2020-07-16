import * as React from "react";
import { CoupModal } from "../modals/CoupModal";

import "./HomePage.scss";

export class HomePage extends React.Component {

    public render() {
        return (
            <div className="home-page">
                <h1 className="page-header">
                    Coup - Deceptive strategy
                </h1>
                <br />
                <div className="rules-button">
                    <CoupModal
                        openButtonText="Do you know the rules?"
                        closeButtonText="I'm ready to go!"
                    />
                </div>
            </div>
        );
    }
}
