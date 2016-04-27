
import * as React from "react";

interface SwitchProps {

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
}


//
declare const Switch: React.ComponentClass<SwitchProps>;

export default Switch;
