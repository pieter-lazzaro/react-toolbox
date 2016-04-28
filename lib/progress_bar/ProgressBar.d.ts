
import * as React from "react";

interface ProgressBarProps extends React.HTMLAttributes {

//Default: 0
buffer?: number;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 100
max?: number;

//Default: 0
min?: number;

//Default: 'indeterminate'
mode?: string;

//Default: false
multicolor?: boolean;

//Default: 'linear'
type?: 'linear' | 'circular';

//Default: 0
value?: number;
}


//
declare const ProgressBar: React.ComponentClass<ProgressBarProps>;

export default ProgressBar;
