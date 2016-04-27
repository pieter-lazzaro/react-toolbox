
import * as React from "react";

interface TableProps {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: true
heading?: boolean;

model?: undefined;

onChange?: Function;

onSelect?: Function;

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
