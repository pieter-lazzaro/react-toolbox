
import * as React from "react";

interface TableProps extends React.DOMAttributes {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: true
heading?: boolean;

model?: undefined;

onChange?: (...args:any[]) => any;

onSelect?: (...args:any[]) => any;

//Default: true
selectable?: boolean;

//Default: []
selected?: any[];

//Default: []
source?: any[];
}


//
declare const Table: React.ComponentClass<TableProps>;

export default Table;
