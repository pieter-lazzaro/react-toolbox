
import * as React from "react";

interface CalendarProps {

//Default: 'months'
display?: [object Object] | [object Object];

maxDate?: undefined;

minDate?: undefined;

onChange?: Function;

//Default: new Date()
selectedDate?: undefined;

viewDate?: undefined;
}


//
declare const Calendar: React.ComponentClass<CalendarProps>;

export default Calendar;
