
import * as React from "react";

interface CardActionsProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;
}


//
declare const CardActions: React.ComponentClass<CardActionsProps>;

export default CardActions;
