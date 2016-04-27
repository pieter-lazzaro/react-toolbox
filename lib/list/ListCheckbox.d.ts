
import * as React from "react";

interface ListCheckboxProps {

caption: string;

//Default: false
checked?: boolean;
//Additional class(es) for custom styling.
className?: string;

//Default: false
disabled?: boolean;

legend?: string;

name?: string;

onBlur?: Function;

onChange?: Function;

onFocus?: Function;
}


//
declare const ListCheckbox: React.ComponentClass<ListCheckboxProps>;

export default ListCheckbox;
