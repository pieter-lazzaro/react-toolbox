
import * as React from "react";

interface ListItemProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;

//Default: false
disabled?: boolean;

onClick?: (...args:any[]) => any;

//Default: false
ripple?: boolean;

to?: string;
}


//
declare const ListItem: React.ComponentClass<ListItemProps>;

export default ListItem;
