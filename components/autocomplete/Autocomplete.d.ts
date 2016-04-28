
import * as React from "react";

interface AutocompleteProps extends React.DOMAttributes {
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 'auto'
direction?: 'auto' | 'up' | 'down';

disabled?: boolean;

error?: string;

label?: string;

//Default: true
multiple?: boolean;

onChange?: (...args:any[]) => any;

//Default: 'above'
selectedPosition?: 'above' | 'below';

//Default: {}
source?: any;

value?: any;
}


//
declare const Autocomplete: React.ComponentClass<AutocompleteProps>;

export default Autocomplete;
