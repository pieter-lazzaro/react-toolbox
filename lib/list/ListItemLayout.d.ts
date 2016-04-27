
import * as React from "react";

interface ListItemLayoutProps extends React.DOMAttributes {

avatar?: string | React.ClassicElement<any>;

caption?: string;
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;

//Default: false
disabled?: boolean;

itemContent?: React.ClassicElement<any>;

leftActions?: any[];

leftIcon?: string | React.ClassicElement<any>;

legend?: string;

rightActions?: any[];

rightIcon?: string | React.ClassicElement<any>;

//Default: false
selectable?: boolean;

to?: string;
}


//
declare const ListItemLayout: React.ComponentClass<ListItemLayoutProps>;

export default ListItemLayout;
