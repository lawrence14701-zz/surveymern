import React from 'react';
import signUpStyles from './signUpStyles.module.css';
import { HeaderTweeter } from './svg';

const Modal = ({ show, children }) => {
	const {
		modal,
		modalHeader,
		headerSpacingLeft,
		headerSpacingRight,
		modalFormContainer,
		modalForm,
		modalFormTitle,
		headerContainerSvg,
	} = signUpStyles;
	return (
		<>
			{show && (
				<div className={modal}>
					<div className={modalHeader}>
						<div className={headerSpacingLeft} />
						<div className={headerContainerSvg}>
							<HeaderTweeter />
						</div>
						<div className={headerSpacingRight} />
					</div>
					<div className={modalFormContainer}>
						<div className={modalForm}>
							<div className={modalFormTitle}>Create your account</div>
							{children}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
