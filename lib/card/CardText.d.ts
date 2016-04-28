
import * as React from "react";

interface CardTextProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;
}


//
declare const CardText: React.ComponentClass<CardTextProps>;

export default CardText;
