import DatePicker from "react-multi-date-picker"

function DatePickerField({ label, date, setDate }) {
    return (
        <div class="flex flex-col gap-2 my-4">
            <span>{label}</span>
            <DatePicker
                inputClass="rounded-xl p-2 outline-none focus:shadow-lg duration-300 bg-color2/10 w-full"
                calendarPosition="bottom-center"
                value={date}
                onChange={(date) => setDate(date)}
                format="YYYY/MM/DD"
            />
        </div>
    )
}
export default DatePickerField
