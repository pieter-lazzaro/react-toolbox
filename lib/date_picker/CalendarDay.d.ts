
import * as React from "react";

interface CalendarDayProps {

day?: number;

disabled?: boolean;

onClick?: Function;

selectedDate?: undefined;

viewDate?: undefined;
}


//
declare const CalendarDay: React.ComponentClass<CalendarDayProps>;

export default CalendarDay;
