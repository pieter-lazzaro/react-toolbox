
import * as React from "react";

interface TimePickerProps extends React.DOMAttributes {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

error?: string;

//Default: '24hr'
format?: '24hr' | 'ampm';

inputClassName?: string;

label?: string;

onChange?: (...args:any[]) => any;

value?: Object;
}


//
declare const TimePicker: React.ComponentClass<TimePickerProps>;

export default TimePicker;
