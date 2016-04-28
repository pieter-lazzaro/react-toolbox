
import * as React from "react";

interface ListCheckboxProps extends React.HTMLAttributes {

caption: string;

//Default: false
checked?: boolean;
//Additional class(es) for custom styling.
className?: string;

//Default: false
disabled?: boolean;

legend?: string;

name?: string;

onBlur?: (...args:any[]) => any;

onChange?: (...args:any[]) => any;

onFocus?: (...args:any[]) => any;
}


//
declare const ListCheckbox: React.ComponentClass<ListCheckboxProps>;

export default ListCheckbox;
