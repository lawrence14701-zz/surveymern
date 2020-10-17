import React, { useState, useEffect } from 'react';

const UseCurrentUser = (props) => {
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (props.currentUser === true) {
			props.history.push('/tweets');
		} else {
			setErrors(props.errors);
		}
	}, [props.currentUser, props.errors, props.history]);

	return (
		<ul>
			{Object.keys(errors).map((error, i) => (
				<li key={`error-${i}`}>{errors[error]}</li>
			))}
		</ul>
	);
};

export default UseCurrentUser;
