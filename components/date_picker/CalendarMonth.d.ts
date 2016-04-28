
import * as React from "react";

interface CalendarMonthProps extends React.HTMLAttributes {

maxDate?: Object;

minDate?: Object;

onDayClick?: (...args:any[]) => any;

selectedDate?: Object;

viewDate?: Object;
}


//
declare const CalendarMonth: React.ComponentClass<CalendarMonthProps>;

export default CalendarMonth;
