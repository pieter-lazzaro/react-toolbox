
import * as React from "react";

interface DropdownProps extends React.DOMAttributes {

//Default: true
allowBlank?: boolean;

//Default: true
auto?: boolean;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

error?: string;

label?: string;

onBlur?: (...args:any[]) => any;

onChange?: (...args:any[]) => any;

onFocus?: (...args:any[]) => any;

source: any[];

template?: (...args:any[]) => any;

value?: string | number;
}


//
declare const Dropdown: React.ComponentClass<DropdownProps>;

export default Dropdown;
