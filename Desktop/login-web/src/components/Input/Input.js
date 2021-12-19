import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Input.scss";

const Input = ({
	label,
	name,
	id,
	value,
	type,
	placeholder,
	isValid,
	errorMessage,
	isRequired,
	onChange,
	isReadOnly,
	isDisabled,
	isHorizontal,
	isResponsive,
}) => {

	const classes = classNames({
		"input-wrapper": true,
		"input-wrapper--inValid": !isValid,
		"input-wrapper--isHorizontal": isHorizontal,
		"input-wrapper--isResponsive": isResponsive,
	});

	const labelClasses = classNames({
		"input-wrapper__label": !isResponsive,
		"input-wrapper__label--isResponsive": isResponsive,
	});

	const inputClasses = classNames({
		"input-wrapper__input": !isResponsive,
		"input-wrapper__input--isResponsive": isResponsive,
	});

	const [inputValue, setInputValue] = useState(value);
	const handleChange = (e) => {
		setInputValue(e.target.value);
		onChange(e);
	};
	
	return (
		<div className={classes}>
			{label && <label className={labelClasses}>{label}</label>}
			<input
				className={inputClasses}
				name={name}
				id={id}
				value={inputValue}
				type={type}
				placeholder={placeholder}
				required={isRequired}
				onChange={handleChange}
				readOnly={isReadOnly}
				disabled={isDisabled}
			/>
			{!isValid && (
				<span className="notification--err">{errorMessage}</span>
			)}
		</div>
	);
};

Input.propTypes = {
	/** Label of input */
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

	/** Name of input */
	name: PropTypes.string,

	/** Id of input */
	id: PropTypes.string,

	/** Value of input */
	value: PropTypes.string,

	/** Type of input */
	type: PropTypes.oneOf(["email", "password", "number", "tel", "text", "url"]),

	/** Placeholder of input */
	placeholder: PropTypes.string,

	/** Validity */
	isValid: PropTypes.bool,

	/** Error message */
	errorMessage: PropTypes.string,

	/** Required field */
	isRequired: PropTypes.bool,

	/** Currency Input: Disables characters and includes thousand commas */
	isCurrency: PropTypes.bool,

	/** Execute a JavaScript when a user changes the selected option */
	onChange: PropTypes.func,

	/** Only allows Read for users */
	isReadOnly: PropTypes.bool,

	/** Disabling the Input */
	isDisabled: PropTypes.bool,

	/** Horizontal Display */
	isHorizontal: PropTypes.bool,

	/** Responsive Display */
	isResponsive: PropTypes.bool,
};

Input.defaultProps = {
	label: "",
	name: "input",
	id: "input",
	value: "",
	type: "text",
	placeholder: "Please enter...",
	isValid: true,
	errorMessage: "Invalid ...",
	isRequired: true,
	onChange: () => {},
	isCurrency: false,
	isReadOnly: false,
	isDisabled: false,
	isHorizontal: false,
	isResponsive: false,
};

export default Input;
