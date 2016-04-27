
import * as React from "react";

interface DropdownProps {

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

onBlur?: Function;

onChange?: Function;

onFocus?: Function;

source: any[];

template?: Function;

value?: string | number;
}


//
declare const Dropdown: React.ComponentClass<DropdownProps>;

export default Dropdown;
