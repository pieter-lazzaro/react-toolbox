
import * as React from "react";

interface ListItemTextProps {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;

//Default: false
primary?: boolean;
}


//
declare const ListItemText: React.ComponentClass<ListItemTextProps>;

export default ListItemText;
