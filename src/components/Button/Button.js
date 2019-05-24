import React from 'react';

import './style.css';

const Button = ({ children, loading = false, ...props }) => (
	<button className="button" disabled={loading} {...props}>
		{loading ? 'Loading...' : children}{' '}
	</button>
);

export default Button;
