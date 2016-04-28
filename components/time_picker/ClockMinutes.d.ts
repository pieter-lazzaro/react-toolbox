
import * as React from "react";

interface ClockMinutesProps extends React.DOMAttributes {

center?: Object;

//Default: null
onChange?: (...args:any[]) => any;

radius?: number;

//Default: 0
selected?: number;

spacing?: number;
}


//
declare const ClockMinutes: React.ComponentClass<ClockMinutesProps>;

export default ClockMinutes;
