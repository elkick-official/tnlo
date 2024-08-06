import { DatePicker } from 'antd';
import "./TNDatePicker.css";
const { RangePicker } = DatePicker;
interface CustomDatePickerProps  {
    label?: string;
    options: { label: string; value: string | number }[];
  }
  
export const TNDatePicker:React.FC<CustomDatePickerProps>  = ({
    label,
    options,
    ...rest
}) => {
    return(
        <>
            <div className="date-picker-wrap">
                {label && <label className="ILInputLabelText fw-500 text-tnl-white-edgar d-block">{label}</label>}
                <RangePicker {...rest}/>
            </div>
        </>
    )
}