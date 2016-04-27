
import * as React from "react";

interface CheckboxProps {

//Default: false
checked?: boolean;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

label?: any;

onChange?: Function;
}


//
declare const Checkbox: React.ComponentClass<CheckboxProps>;

export default Checkbox;
