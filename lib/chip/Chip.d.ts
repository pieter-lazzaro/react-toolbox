
import * as React from "react";

interface ChipProps extends React.DOMAttributes {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
deletable?: boolean;

onDeleteClick?: (...args:any[]) => any;
}


//
declare const Chip: React.ComponentClass<ChipProps>;

export default Chip;
