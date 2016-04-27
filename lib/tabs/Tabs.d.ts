
import * as React from "react";

interface TabsProps {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
className?: string;

disableAnimatedBottomBorder?: boolean;

//Default: 0
index?: number;

onChange?: Function;
}


//
declare const Tabs: React.ComponentClass<TabsProps>;

export default Tabs;
