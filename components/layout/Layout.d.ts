
import * as React from "react";

interface LayoutProps extends React.HTMLAttributes {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;
}


//
declare const Layout: React.ComponentClass<LayoutProps>;

export default Layout;
