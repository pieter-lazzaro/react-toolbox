
import * as React from "react";

interface TabProps {

//Default: false
active?: boolean;

activeClassName?: string;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

//Default: false
hidden?: boolean;

label: any;

onActive?: Function;

onClick?: Function;
}


//
declare const Tab: React.ComponentClass<TabProps>;

export default Tab;
