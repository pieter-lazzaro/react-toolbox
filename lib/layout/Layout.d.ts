
import * as React from "react";

interface LayoutProps extends React.DOMAttributes {
//Children to pass through the component.
children?: undefined;
//Additional class(es) for custom styling.
//Default: ''
className?: string;
}


//
declare const Layout: React.ComponentClass<LayoutProps>;

export default Layout;
