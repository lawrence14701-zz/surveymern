import React from 'react';
import loginStyles from './loginStyles.module.css';

const Wrapper = ({ children, label }) => (
	<div className={loginStyles.inputOuter}>
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

export default Wrapper;
