
import * as React from "react";

interface TableHeadProps {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: {}
model?: undefined;

onSelect?: Function;

selectable?: boolean;

//Default: false
selected?: boolean;
}


//
declare const TableHead: React.ComponentClass<TableHeadProps>;

export default TableHead;
