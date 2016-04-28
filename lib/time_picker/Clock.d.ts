
import * as React from "react";

interface ClockProps extends React.HTMLAttributes {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 'hours'
display?: 'hours' | 'minutes';

//Default: '24hr'
format?: '24hr' | 'ampm';

onChange?: (...args:any[]) => any;

onHandMoved?: (...args:any[]) => any;

//Default: new Date()
time?: Object;
}


//
declare const Clock: React.ComponentClass<ClockProps>;

export default Clock;
