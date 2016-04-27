
import * as React from "react";

interface ClockHandProps extends React.DOMAttributes {

//Default: 0
angle?: number;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 0
length?: number;

onMove?: (...args:any[]) => any;

onMoved?: (...args:any[]) => any;

//Default: {}
origin?: undefined;

step?: number;
}


//
declare const ClockHand: React.ComponentClass<ClockHandProps>;

export default ClockHand;
