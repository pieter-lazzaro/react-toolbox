
import * as React from "react";

interface ClockProps extends React.DOMAttributes {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 'hours'
display?: [object Object] | [object Object];

//Default: '24hr'
format?: [object Object] | [object Object];

onChange?: (...args:any[]) => any;

onHandMoved?: (...args:any[]) => any;

//Default: new Date()
time?: undefined;
}


//
declare const Clock: React.ComponentClass<ClockProps>;

export default Clock;
