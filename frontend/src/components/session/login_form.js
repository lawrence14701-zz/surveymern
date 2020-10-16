import React from 'react';
import { withRouter } from 'react-router-dom';
import Wrapper from './inputWrapper';
import loginStyles from './loginStyles.module.css';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: {},
			focused: true,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	// Once the user has been authenticated, redirect to the Tweets page
	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser === true) {
			this.props.history.push('/tweets');
		}

		// Set or clear errors
		this.setState({ errors: nextProps.errors });
	}

	// Handle field updates (called in the render method)
	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	// Handle form submission
	handleSubmit(e) {
		e.preventDefault();

		let user = {
			email: this.state.email,
			password: this.state.password,
		};

		this.props.login(user);
	}
	focus() {
		this.setState({ focused: true });
	}

	// Render the session errors if there are any
	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className={loginStyles.loginContainer}>
				<form onSubmit={this.handleSubmit}>
					<div className={loginStyles.inputsContainer}>
						<Wrapper active={this.state.focused} label="Phone, Email, Or Username">
							<input
								className={loginStyles.input}
								type="text"
								value={this.state.email}
								onChange={this.update('email')}
							/>
						</Wrapper>
						<Wrapper active={this.state.focused} label="Password">
							<input
								className={loginStyles.input}
								type="password"
								value={this.state.password}
								onChange={this.update('password')}
							/>
						</Wrapper>
						<input type="submit" value="Submit" />
						{this.renderErrors()}
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(LoginForm);
