
import * as React from "react";

interface RadioButtonProps extends React.DOMAttributes {

//Default: false
checked?: boolean;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

label?: string;

name?: string;

onBlur?: (...args:any[]) => any;

onChange?: (...args:any[]) => any;

onFocus?: (...args:any[]) => any;

value?: any;
}


//
declare const RadioButton: React.ComponentClass<RadioButtonProps>;

export default RadioButton;
