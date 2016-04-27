
import * as React from "react";

interface InputProps {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

error?: string;

//Default: true
floating?: boolean;

//Default: ''
hint?: string;

icon?: string | React.Element;

label?: string;

maxLength?: number;

//Default: false
multiline?: boolean;

onBlur?: Function;

onChange?: Function;

onFocus?: Function;

onKeyPress?: Function;

//Default: false
required?: boolean;

//Default: 'text'
type?: string;

value?: any;
}


//
declare const Input: React.ComponentClass<InputProps>;

export default Input;
