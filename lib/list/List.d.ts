
import * as React from "react";

interface ListProps extends React.HTMLAttributes {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
ripple?: boolean;

//Default: false
selectable?: boolean;
}


//
declare const List: React.ComponentClass<ListProps>;

export default List;
