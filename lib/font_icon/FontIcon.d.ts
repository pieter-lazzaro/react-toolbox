
import * as React from "react";

interface FontIconProps {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

value?: string | React.Element;
}


//
declare const FontIcon: React.ComponentClass<FontIconProps>;

export default FontIcon;
