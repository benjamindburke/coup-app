import * as React from "react";
import "./Hello.scss";

interface Props {
    compiler: string;
    framework: string;
    bundler: string;
}

export class Hello extends React.Component<Props> {
    public render() {
        return (
            <h1 className="hello">
                This is a {this.props.framework} application using {this.props.compiler} with {this.props.bundler}. It also hot loads!
            </h1>
        );
    }
}
