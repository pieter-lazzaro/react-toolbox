
import * as React from "react";

interface AvatarProps extends React.HTMLAttributes {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
className?: string;

icon?: string | React.ClassicElement<any>;

image?: string | React.ClassicElement<any>;

title?: string;
}


//
declare const Avatar: React.ComponentClass<AvatarProps>;

export default Avatar;
