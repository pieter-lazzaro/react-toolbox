
import * as React from "react";

interface CalendarDayProps extends React.DOMAttributes {

day?: number;

disabled?: boolean;

onClick?: (...args:any[]) => any;

selectedDate?: Object;

viewDate?: Object;
}


//
declare const CalendarDay: React.ComponentClass<CalendarDayProps>;

export default CalendarDay;
