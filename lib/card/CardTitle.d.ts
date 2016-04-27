
import * as React from "react";

interface CardTitleProps {

avatar?: string | React.Element;
//Children to pass through the component.
children?: string | React.Element | any[];
//Additional class(es) for custom styling.
className?: string;

subtitle?: string | React.Element;

title?: string | React.Element;
}


//
declare const CardTitle: React.ComponentClass<CardTitleProps>;

export default CardTitle;
