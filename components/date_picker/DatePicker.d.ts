
import * as React from "react";

interface DatePickerProps extends React.DOMAttributes {

autoOk?: boolean;
//Additional class(es) for custom styling.
className?: string;

error?: string;

inputClassName?: string;

inputFormat?: (...args:any[]) => any;

label?: string;

maxDate?: Object;

minDate?: Object;

onChange?: (...args:any[]) => any;

value?: Object;
}


//
declare const DatePicker: React.ComponentClass<DatePickerProps>;

export default DatePicker;
