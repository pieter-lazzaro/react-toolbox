
import * as React from "react";

interface CardProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;

raised?: boolean;
}


//
declare const Card: React.ComponentClass<CardProps>;

export default Card;
