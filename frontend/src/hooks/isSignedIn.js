import React, { useState, useEffect } from 'react';

const IsSignedIn = (props) => {
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (props.signedIn === true) {
			props.history.push('/login');
		} else {
			setErrors(props.errors);
		}
	}, [props.signedIn, props.errors, props.history]);
	return (
		<ul>
			{Object.keys(errors).map((error, i) => (
				<li key={`error-${i}`}>{errors[error]}</li>
			))}
		</ul>
	);
};

export default IsSignedIn;
