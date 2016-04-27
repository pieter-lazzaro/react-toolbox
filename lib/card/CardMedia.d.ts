
import * as React from "react";

interface CardMediaProps extends React.DOMAttributes {

aspectRatio?: [object Object] | [object Object];
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
className?: string;

color?: string;

contentOverlay?: boolean;

image?: string | React.ClassicElement<any>;
}


//
declare const CardMedia: React.ComponentClass<CardMediaProps>;

export default CardMedia;
