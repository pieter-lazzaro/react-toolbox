
import * as React from "react";

interface DatePickerDialogProps extends React.DOMAttributes {

//Default: false
active?: boolean;

autoOk?: boolean;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

maxDate?: Object;

minDate?: Object;

onDismiss?: (...args:any[]) => any;

onSelect?: (...args:any[]) => any;

//Default: new Date()
value?: Object;
}


//
declare const DatePickerDialog: React.ComponentClass<DatePickerDialogProps>;

export default DatePickerDialog;
