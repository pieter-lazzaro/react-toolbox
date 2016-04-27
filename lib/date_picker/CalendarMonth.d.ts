
import * as React from "react";

interface CalendarMonthProps {

maxDate?: undefined;

minDate?: undefined;

onDayClick?: Function;

selectedDate?: undefined;

viewDate?: undefined;
}


//
declare const CalendarMonth: React.ComponentClass<CalendarMonthProps>;

export default CalendarMonth;
