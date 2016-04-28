
import * as React from "react";

interface CheckboxProps extends React.HTMLAttributes {

//Default: false
checked?: boolean;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

label?: any;

onChange?: (...args:any[]) => any;
}


//
declare const Checkbox: React.ComponentClass<CheckboxProps>;

export default Checkbox;
