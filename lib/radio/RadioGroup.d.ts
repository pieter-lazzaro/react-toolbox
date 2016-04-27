
import * as React from "react";

interface RadioGroupProps {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

name?: string;

onChange?: Function;

value?: any;
}


//
declare const RadioGroup: React.ComponentClass<RadioGroupProps>;

export default RadioGroup;
