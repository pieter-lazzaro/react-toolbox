
import * as React from "react";

interface ClockMinutesProps {

center?: undefined;

//Default: null
onChange?: Function;

radius?: number;

//Default: 0
selected?: number;

spacing?: number;
}


//
declare const ClockMinutes: React.ComponentClass<ClockMinutesProps>;

export default ClockMinutes;
