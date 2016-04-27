
import * as React from "react";

interface PanelProps {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
scrollY?: boolean;
}


//
declare const Panel: React.ComponentClass<PanelProps>;

export default Panel;
