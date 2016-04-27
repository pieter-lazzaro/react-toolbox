
import * as React from "react";

interface CalendarProps extends React.DOMAttributes {

//Default: 'months'
display?: [object Object] | [object Object];

maxDate?: undefined;

minDate?: undefined;

onChange?: (...args:any[]) => any;

//Default: new Date()
selectedDate?: undefined;

viewDate?: undefined;
}


//
declare const Calendar: React.ComponentClass<CalendarProps>;

export default Calendar;
