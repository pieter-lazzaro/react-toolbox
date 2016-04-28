
import * as React from "react";

interface ClockHoursProps extends React.HTMLAttributes {

center?: Object;

format?: '24hr' | 'ampm';

onChange?: (...args:any[]) => any;

onHandMoved?: (...args:any[]) => any;

radius?: number;

selected?: number;

spacing?: number;
}


//
declare const ClockHours: React.ComponentClass<ClockHoursProps>;

export default ClockHours;
