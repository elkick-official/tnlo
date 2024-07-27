import { Calendar } from "antd";
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { FC, ReactNode } from "react";
import "./TNFullPageCalendar.css";
interface TNFullPageCalendarProps {
    fullscreen: boolean;
}
export const TNFullPageCalendar: FC<TNFullPageCalendarProps> = ({fullscreen, ...rest}) => {
    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
    return(
        <>
              <Calendar fullscreen={fullscreen} onPanelChange={onPanelChange} {...rest}/>
        </>
    )
}