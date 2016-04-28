
import * as React from "react";

interface RadioGroupProps extends React.DOMAttributes {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

name?: string;

onChange?: (...args:any[]) => any;

value?: any;
}


//
declare const RadioGroup: React.ComponentClass<RadioGroupProps>;

export default RadioGroup;
