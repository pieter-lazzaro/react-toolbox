
import * as React from "react";

interface SwitchProps extends React.HTMLAttributes {

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
}


//
declare const Switch: React.ComponentClass<SwitchProps>;

export default Switch;
