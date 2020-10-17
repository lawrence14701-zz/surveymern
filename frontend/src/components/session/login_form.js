import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Wrapper from './inputWrapper';
import loginStyles from './loginStyles.module.css';
import UseCurrentUser from '../../hooks/useCurrentUser';
import SubmitButton from './loginButton';

const LoginForm = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [activePassword, setActivePassword] = useState(false);
	const [activeEmail, setActiveEmail] = useState(false);

	const errors = UseCurrentUser(props);

	const handleSubmit = (e) => {
		e.preventDefault();

		let user = {
			email,
			password,
		};

		props.login(user);
	};

	return (
		<div className={loginStyles.loginContainer}>
			<form onSubmit={handleSubmit}>
				<div className={loginStyles.inputsContainer}>
					<Wrapper isActive={activeEmail} placeHolder="Phone, Email, Or Username" width="250px">
						<input
							onFocus={() => setActiveEmail(true)}
							onBlur={() => setActiveEmail(false)}
							className={loginStyles.input}
							type="text"
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
						/>
					</Wrapper>
					<Wrapper isActive={activePassword} placeHolder="Password" width="250px">
						<input
							onFocus={() => setActivePassword(true)}
							onBlur={() => setActivePassword(false)}
							className={loginStyles.input}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
					</Wrapper>
					<SubmitButton />
					{errors}
				</div>
			</form>
		</div>
	);
};

export default withRouter(LoginForm);
