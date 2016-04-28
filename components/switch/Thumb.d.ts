
import * as React from "react";

interface ThumbProps extends React.HTMLAttributes {
//Children to pass through the component.
children?: any;
}


//
declare const Thumb: React.ComponentClass<ThumbProps>;

export default Thumb;
