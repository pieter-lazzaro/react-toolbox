
import * as React from "react";

interface RadioProps {

checked?: boolean;
//Children to pass through the component.
children?: any;

onMouseDown?: Function;
}


//
declare const Radio: React.ComponentClass<RadioProps>;

export default Radio;
