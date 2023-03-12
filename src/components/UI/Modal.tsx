import React from "react";
import ReactDOM from "react-dom";

import styles from "../../styles/UI/Modal.module.css";

const Backdrop: React.FC<BackdropProps> = (props) => {
	return <div className={styles["modal-backdrop"]} onClick={props.onClick} />;
};

const Overlay: React.FC<OverlayProps> = (props) => {
	return <div className={styles["modal-overlay"]}>{props.children}</div>;
};

interface BackdropProps {
	onClick: () => void;
}

interface OverlayProps {
	children: React.ReactNode;
}

interface ModalProps extends BackdropProps, OverlayProps {}

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
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
