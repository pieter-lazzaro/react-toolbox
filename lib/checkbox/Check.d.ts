
import * as React from "react";

interface CheckProps {

checked?: boolean;
//Children to pass through the component.
children?: any;

onMouseDown?: Function;
}


//
declare const Check: React.ComponentClass<CheckProps>;

export default Check;
