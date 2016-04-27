
import * as React from "react";

interface AvatarProps {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
className?: string;

icon?: string | React.Element;

image?: string | React.Element;

title?: string;
}


//
declare const Avatar: React.ComponentClass<AvatarProps>;

export default Avatar;
