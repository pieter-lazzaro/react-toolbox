
import * as React from "react";

interface RadioProps extends React.DOMAttributes {

checked?: boolean;
//Children to pass through the component.
children?: any;

onMouseDown?: (...args:any[]) => any;
}


//
declare const Radio: React.ComponentClass<RadioProps>;

export default Radio;
