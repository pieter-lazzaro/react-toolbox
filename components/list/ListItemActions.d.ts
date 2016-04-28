
import * as React from "react";

interface ListItemActionsProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;

type?: 'left' | 'right';
}


//
declare const ListItemActions: React.ComponentClass<ListItemActionsProps>;

export default ListItemActions;
