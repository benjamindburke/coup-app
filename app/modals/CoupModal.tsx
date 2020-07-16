import * as React from "react";
import Modal from "react-modal";

interface Props {
    openButtonText: String;
    closeButtonText: String;
    onModalOpen?: Function;
    onModalClose?: Function;
}

interface State {
    showModal: boolean;
}

export class CoupModal extends React.Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props, state);

        this.state = { showModal: false };

        // bind functions to current component instance
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        if (this.props.onModalOpen) {
            this.props.onModalOpen();
        }

        this.setState({ showModal: true });
    }

    closeModal() {
        if (this.props.onModalClose) {
            this.props.onModalClose();
        }

        this.setState({ showModal: false });
    }

    public render () {
        return (
            <div>
                <button onClick={this.openModal}>
                    {this.props.openButtonText}
                </button>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="currently-open-modal"
                >
                    { this.props.children }
                    <button type="button" onClick={this.closeModal}>
                        {this.props.closeButtonText}
                    </button>
                </Modal>
            </div>
        );
    }
}
