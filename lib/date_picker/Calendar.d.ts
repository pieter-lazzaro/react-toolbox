
import * as React from "react";

interface CalendarProps extends React.DOMAttributes {

//Default: 'months'
display?: 'months' | 'years';

maxDate?: Object;

minDate?: Object;

onChange?: (...args:any[]) => any;

//Default: new Date()
selectedDate?: Object;

viewDate?: Object;
}


//
declare const Calendar: React.ComponentClass<CalendarProps>;

export default Calendar;
