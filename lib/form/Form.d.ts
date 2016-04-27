
import * as React from "react";

interface FormProps extends React.DOMAttributes {

//Default: []
attributes?: any[];
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

model?: Object;

onChange?: (...args:any[]) => any;

onError?: (...args:any[]) => any;

onSubmit?: (...args:any[]) => any;

onValid?: (...args:any[]) => any;

storage?: string;
}


//
declare const Form: React.ComponentClass<FormProps>;

export default Form;
