
import * as React from "react";

interface FormProps {

//Default: []
attributes?: any[];
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

model?: undefined;

onChange?: Function;

onError?: Function;

onSubmit?: Function;

onValid?: Function;

storage?: string;
}


//
declare const Form: React.ComponentClass<FormProps>;

export default Form;
