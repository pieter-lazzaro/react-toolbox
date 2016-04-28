
import * as React from "react";

interface TabContentProps extends React.HTMLAttributes {

//Default: false
active?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

tabIndex?: number;
}


//
declare const TabContent: React.ComponentClass<TabContentProps>;

export default TabContent;
