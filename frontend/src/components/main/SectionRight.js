import React from 'react';
import styles from './styles.module.css';
import cx from 'classnames';
import Login from '../session/login_form_container';
import SignUp from '../session/signup_form_container';

const Sectionright = () => {
	return (
		<div className={cx(styles.sectionRight, styles.section)}>
			<Login />
			<SignUp />
		</div>
	);
};

export default Sectionright;
