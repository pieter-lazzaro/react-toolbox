
import * as React from "react";

interface PortalProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;

container?: any;

//Default: true
lockBody?: boolean;
}


//
declare const Portal: React.ComponentClass<PortalProps>;

export default Portal;
