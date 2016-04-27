
import * as React from "react";

interface DatePickerDialogProps {

//Default: false
active?: boolean;

autoOk?: boolean;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

maxDate?: undefined;

minDate?: undefined;

onDismiss?: Function;

onSelect?: Function;

//Default: new Date()
value?: undefined;
}


//
declare const DatePickerDialog: React.ComponentClass<DatePickerDialogProps>;

export default DatePickerDialog;
