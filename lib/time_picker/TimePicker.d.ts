
import * as React from "react";

interface TimePickerProps {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

error?: string;

//Default: '24hr'
format?: [object Object] | [object Object];

inputClassName?: string;

label?: string;

onChange?: Function;

value?: undefined;
}


//
declare const TimePicker: React.ComponentClass<TimePickerProps>;

export default TimePicker;
