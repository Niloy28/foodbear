import React, { useState } from "react";

const useInput = (validateInput: (input: string) => boolean) => {
	const [inputValue, setInputValue] = useState("");
	const [isInputTouched, setIsInputTouched] = useState(false);

	const isInputValid = validateInput(inputValue);
	const inputHasError = !isInputValid && isInputTouched;

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.currentTarget.value);
	};

	const inputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsInputTouched(true);
	};

	const resetInput = () => {
		setInputValue("");
		setIsInputTouched(false);
	};

	return {
		inputValue,
		inputChangeHandler,
		inputBlurHandler,
		isInputValid,
		inputHasError,
		resetInput,
	};
};

export default useInput;
