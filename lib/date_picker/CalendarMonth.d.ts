
import * as React from "react";

interface CalendarMonthProps extends React.DOMAttributes {

maxDate?: undefined;

minDate?: undefined;

onDayClick?: (...args:any[]) => any;

selectedDate?: undefined;

viewDate?: undefined;
}


//
declare const CalendarMonth: React.ComponentClass<CalendarMonthProps>;

export default CalendarMonth;
