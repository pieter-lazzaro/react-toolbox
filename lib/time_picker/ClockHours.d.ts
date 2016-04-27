
import * as React from "react";

interface ClockHoursProps extends React.DOMAttributes {

center?: undefined;

format?: [object Object] | [object Object];

onChange?: (...args:any[]) => any;

onHandMoved?: (...args:any[]) => any;

radius?: number;

selected?: number;

spacing?: number;
}


//
declare const ClockHours: React.ComponentClass<ClockHoursProps>;

export default ClockHours;
