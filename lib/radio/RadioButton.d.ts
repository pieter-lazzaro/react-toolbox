
import * as React from "react";

interface RadioButtonProps {

//Default: false
checked?: boolean;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

label?: string;

name?: string;

onBlur?: Function;

onChange?: Function;

onFocus?: Function;

value?: any;
}


//
declare const RadioButton: React.ComponentClass<RadioButtonProps>;

export default RadioButton;
