
import * as React from "react";

interface ClockFaceProps extends React.HTMLAttributes {

//Default: null
active?: number;

//Default: []
numbers?: any[];

//Default: 0
radius?: number;

spacing?: number;

//Default: false
twoDigits?: boolean;
}


//
declare const ClockFace: React.ComponentClass<ClockFaceProps>;

export default ClockFace;
