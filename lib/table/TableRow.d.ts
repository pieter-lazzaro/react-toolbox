
import * as React from "react";

interface TableRowProps {

data?: undefined;

index?: number;

model?: undefined;

onChange?: Function;

onSelect?: Function;

selectable?: boolean;

selected?: boolean;
}


//
declare const TableRow: React.ComponentClass<TableRowProps>;

export default TableRow;
