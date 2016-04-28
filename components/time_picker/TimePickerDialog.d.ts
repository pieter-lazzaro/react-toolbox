
import * as React from "react";

interface TimePickerDialogProps extends React.HTMLAttributes {

//Default: false
active?: boolean;
//Additional class(es) for custom styling.
className?: string;

//Default: '24hr'
format?: '24hr' | 'ampm';

onDismiss?: (...args:any[]) => any;

onSelect?: (...args:any[]) => any;

//Default: new Date()
value?: Object;
}


//
declare const TimePickerDialog: React.ComponentClass<TimePickerDialogProps>;

export default TimePickerDialog;
