
import * as React from "react";

interface AppBarProps {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
fixed?: boolean;

//Default: false
flat?: boolean;
}


//
declare const AppBar: React.ComponentClass<AppBarProps>;

export default AppBar;
