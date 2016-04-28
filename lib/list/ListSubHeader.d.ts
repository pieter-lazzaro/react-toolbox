
import * as React from "react";

interface ListSubHeaderProps extends React.HTMLAttributes {

caption?: string;
//Additional class(es) for custom styling.
className?: string;
}


//
declare const ListSubHeader: React.ComponentClass<ListSubHeaderProps>;

export default ListSubHeader;
