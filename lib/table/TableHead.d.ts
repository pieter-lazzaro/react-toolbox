
import * as React from "react";

interface TableHeadProps extends React.DOMAttributes {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: {}
model?: undefined;

onSelect?: (...args:any[]) => any;

selectable?: boolean;

//Default: false
selected?: boolean;
}


//
declare const TableHead: React.ComponentClass<TableHeadProps>;

export default TableHead;
