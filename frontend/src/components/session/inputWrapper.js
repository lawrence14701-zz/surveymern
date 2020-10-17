import React from 'react';
import loginStyles from './loginStyles.module.css';
import cx from 'classnames';

const Wrapper = ({ children, placeHolder, isActive, width }) => {
	const { inputOuter, inputInner, border, label, labelContainer, active, container } = loginStyles;
	return (
		<div style={{ width: `${width}` }}>
			<div className={inputOuter}>
				<div className={inputInner}>
					<div className={isActive ? cx(border, active) : border}>
						<div className={labelContainer}>
							<span className={isActive ? cx(label, active) : label}>{placeHolder}</span>
						</div>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
