import React from 'react';
import loginButtonStyles from './loginButtonStyles.module.css';

const LoginButton = () => {
	const { buttonOuter, textContainer, text } = loginButtonStyles;
	return (
		<button type="submit" className={buttonOuter}>
			<div className={textContainer}>
				<span className={text}>Login</span>
			</div>
		</button>
	);
};

export default LoginButton;
