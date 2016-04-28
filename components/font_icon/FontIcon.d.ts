
import * as React from "react";

interface FontIconProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

value?: string | React.ClassicElement<any>;
}


//
declare const FontIcon: React.ComponentClass<FontIconProps>;

export default FontIcon;
