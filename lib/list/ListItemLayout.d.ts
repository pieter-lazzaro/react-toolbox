
import * as React from "react";

interface ListItemLayoutProps {

avatar?: string | React.Element;

caption?: string;
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;

//Default: false
disabled?: boolean;

itemContent?: React.Element;

leftActions?: any[];

leftIcon?: string | React.Element;

legend?: string;

rightActions?: any[];

rightIcon?: string | React.Element;

//Default: false
selectable?: boolean;

to?: string;
}


//
declare const ListItemLayout: React.ComponentClass<ListItemLayoutProps>;

export default ListItemLayout;
