
import * as React from "react";

interface TimePickerProps extends React.DOMAttributes {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

error?: string;

//Default: '24hr'
format?: [object Object] | [object Object];

inputClassName?: string;

label?: string;

onChange?: (...args:any[]) => any;

value?: undefined;
}


//
declare const TimePicker: React.ComponentClass<TimePickerProps>;

export default TimePicker;
