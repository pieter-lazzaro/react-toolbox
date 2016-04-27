
import * as React from "react";

interface ClockHandProps {

//Default: 0
angle?: number;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 0
length?: number;

onMove?: Function;

onMoved?: Function;

//Default: {}
origin?: undefined;

step?: number;
}


//
declare const ClockHand: React.ComponentClass<ClockHandProps>;

export default ClockHand;
