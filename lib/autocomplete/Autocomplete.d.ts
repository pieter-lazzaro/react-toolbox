
import * as React from "react";

interface AutocompleteProps {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 'auto'
direction?: [object Object] | [object Object] | [object Object];

disabled?: boolean;

error?: string;

label?: string;

//Default: true
multiple?: boolean;

onChange?: Function;

//Default: 'above'
selectedPosition?: [object Object] | [object Object];

//Default: {}
source?: any;

value?: any;
}


//
declare const Autocomplete: React.ComponentClass<AutocompleteProps>;

export default Autocomplete;
