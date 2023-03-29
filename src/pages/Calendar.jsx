import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Resize, DragAndDrop, Day, Week, WorkWeek, Month, Agenda]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
