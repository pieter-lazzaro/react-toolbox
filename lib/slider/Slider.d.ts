
import * as React from "react";

interface SliderProps {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
editable?: boolean;

//Default: 100
max?: number;

//Default: 0
min?: number;

onChange?: Function;

//Default: false
pinned?: boolean;

//Default: false
snaps?: boolean;

//Default: 0.01
step?: number;

//Default: 0
value?: number;
}


//
declare const Slider: React.ComponentClass<SliderProps>;

export default Slider;
