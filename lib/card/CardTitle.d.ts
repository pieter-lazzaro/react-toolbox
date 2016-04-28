
import * as React from "react";

interface CardTitleProps extends React.HTMLAttributes {

avatar?: string | React.ClassicElement<any>;
//Children to pass through the component.
children?: string | React.ClassicElement<any> | any[];
//Additional class(es) for custom styling.
className?: string;

subtitle?: string | React.ClassicElement<any>;

title?: string | React.ClassicElement<any>;
}


//
declare const CardTitle: React.ComponentClass<CardTitleProps>;

export default CardTitle;
