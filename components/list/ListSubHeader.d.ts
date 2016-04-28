
import * as React from "react";

interface ListSubHeaderProps extends React.DOMAttributes {

caption?: string;
//Additional class(es) for custom styling.
className?: string;
}


//
declare const ListSubHeader: React.ComponentClass<ListSubHeaderProps>;

export default ListSubHeader;
