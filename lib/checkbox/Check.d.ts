
import * as React from "react";

interface CheckProps extends React.DOMAttributes {

checked?: boolean;
//Children to pass through the component.
children?: any;

onMouseDown?: (...args:any[]) => any;
}


//
declare const Check: React.ComponentClass<CheckProps>;

export default Check;
