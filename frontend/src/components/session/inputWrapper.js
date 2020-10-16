import React from 'react';
import loginStyles from './loginStyles.module.css';

const Wrapper = ({ children, label, active }) => {
	console.log(active);
	return (
		<div className={active ? cx(loginStyles.inputOuter, loginStyles.active) : loginStyles.inputOuter}>
			<div className={loginStyles.inputInner}>
				<div className={loginStyles.border}>
					<div className={loginStyles.labelContainer}>
						<span className={loginStyles.label}>{label}</span>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
