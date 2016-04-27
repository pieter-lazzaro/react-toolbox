
import * as React from "react";

interface ListItemContentProps {

caption?: string;
//Children to pass through the component.
children?: any;

legend?: string;

type?: types;
}


//
declare const ListItemContent: React.ComponentClass<ListItemContentProps>;

export default ListItemContent;
