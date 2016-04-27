
import * as React from "react";

interface DatePickerProps {

autoOk?: boolean;
//Additional class(es) for custom styling.
className?: string;

error?: string;

inputClassName?: string;

inputFormat?: Function;

label?: string;

maxDate?: undefined;

minDate?: undefined;

onChange?: Function;

value?: undefined;
}


//
declare const DatePicker: React.ComponentClass<DatePickerProps>;

export default DatePicker;
