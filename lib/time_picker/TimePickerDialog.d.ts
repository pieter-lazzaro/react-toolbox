
import * as React from "react";

interface TimePickerDialogProps {

//Default: false
active?: boolean;
//Additional class(es) for custom styling.
className?: string;

//Default: '24hr'
format?: [object Object] | [object Object];

onDismiss?: Function;

onSelect?: Function;

//Default: new Date()
value?: undefined;
}


//
declare const TimePickerDialog: React.ComponentClass<TimePickerDialogProps>;

export default TimePickerDialog;
