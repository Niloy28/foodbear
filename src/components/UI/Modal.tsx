import React from "react";
import ReactDOM from "react-dom";

import styles from "../../styles/UI/Modal.module.css";

const Backdrop = () => {
	return <div className={styles["modal-backdrop"]} />;
};

const Overlay: React.FC<ModalProps> = (props) => {
	return <div className={styles["modal-overlay"]}>{props.children}</div>;
};

interface ModalProps {
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById("modal-root")!
			)}
			{ReactDOM.createPortal(
				<Overlay>{props.children}</Overlay>,
				document.getElementById("modal-root")!
			)}
		</>
	);
};

export default Modal;
