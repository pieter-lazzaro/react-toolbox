
import * as React from "react";

interface InputProps extends React.HTMLAttributes {
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

icon?: string | React.ClassicElement<any>;

label?: string;

maxLength?: number;

//Default: false
multiline?: boolean;

onBlur?: (...args:any[]) => any;

onChange?: (...args:any[]) => any;

onFocus?: (...args:any[]) => any;

onKeyPress?: (...args:any[]) => any;

//Default: false
required?: boolean;

//Default: 'text'
type?: string;

value?: any;
}


//
declare const Input: React.ComponentClass<InputProps>;

export default Input;
