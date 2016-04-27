
import * as React from "react";

interface TableRowProps extends React.DOMAttributes {

data?: Object;

index?: number;

model?: Object;

onChange?: (...args:any[]) => any;

onSelect?: (...args:any[]) => any;

selectable?: boolean;

selected?: boolean;
}


//
declare const TableRow: React.ComponentClass<TableRowProps>;

export default TableRow;
