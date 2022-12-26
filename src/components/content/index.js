import React, { useEffect, useState, useContext } from "react";
import * as S from "./styles.js";
import { StoreContext } from "../../store/index.js";
import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";
function Content() {
  const [date, setDate] = useState("");
  const [hourStart, setHourStart] = useState("00");
  const [minutesStart, setMinutesStart] = useState("00");
  const [hoursEnd, setHoursEnd] = useState("00");
  const [minutesEnd, setMinutesEnd] = useState("00");
  const [action, setAction] = useState("");
  const [hour, setHour] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [edit, setEdit] = useState([]);
  const [index, setIndex] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  const tableHeader = [
    {
      id: 1,
      title: "Date",
    },
    {
      id: 2,
      title: "Start",
    },
    {
      id: 3,
      title: "End",
    },
    {
      id: 4,
      title: "Action",
    },
    {
      id: 5,
      title: "Edit/Delete",
    },
  ];

  const booked = useContext(StoreContext);

  useEffect(() => {
    const hoursToSet = [];
    for (let i = 0; i <= 23; i++) {
      if (i < 10) {
        i = `0${i}`;
      }
      hoursToSet.push(i);
    }
    const minutesToSet = [];
    for (let i = 0; i <= 59; i++) {
      if (i < 10) {
        i = `0${i}`;
      }
      minutesToSet.push(i);
    }
    setHour(hoursToSet);
    setMinutes(minutesToSet);
  }, []);

  const DateSelect = () => {
    return (
      <S.SelectDay>
        <label name="time">Select Day</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          name="date"
          type="date"
          value={date}
        />
      </S.SelectDay>
    );
  };

  const StartTime = () => {
    return (
      <S.Time>
        <label name="time">Start Time</label>
        <div>
          <select
            onChange={(e) => setHourStart(e.target.value)}
            name="hour"
            id="hour"
            value={hourStart}
          >
            {hour?.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
          :
          <select
            name="hour"
            id="hour"
            onChange={(e) => setMinutesStart(e.target.value)}
            value={minutesStart}
          >
            {minutes?.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
      </S.Time>
    );
  };

  const clean = () => {
    setEdit(false);
    setHourStart("00");
    setMinutesStart("00");
    setDate("");
    setMinutesEnd("00");
    setHoursEnd("00");
    setAction("");
    setIsEdit(false);
  };

  const onSubmit = () => {
    if (isEdit) {
      const payload = {
        id: edit[0].id,
        date: date,
        start: `${hourStart}:${minutesStart}`,
        end: `${hoursEnd}:${minutesEnd}`,
        action: action,
        startHour: hourStart,
        startminute: minutesStart,
        hourEnd: hoursEnd,
        minutesEnd: minutesEnd,
      };
      booked.booked.map((i) => {
        if (i.id === edit[0].id) {
          booked.booked[index] = payload;
        }
        return clean();
      });
    } else {
      const payload = {
        id: Math.random(),
        date: date,
        start: `${hourStart}:${minutesStart}`,
        end: `${hoursEnd}:${minutesEnd}`,
        action: action,
        startHour: hourStart,
        startminute: minutesStart,
        hourEnd: hoursEnd,
        minutesEnd: minutesEnd,
      };
      let checkstart = `${hourStart}:${minutesStart}`;
      let day = date;
      let sameDate = booked.booked.some(
        (item) => item.start === checkstart && item.date === day
      );
      if (sameDate) {
        return alert(
          `You already have a book for ${day} at ${hourStart}:${minutesStart}`
        );
      } else if (day === "") {
        return alert(`Select a day.`);
      } else if (action === "") {
        return alert(`Action is empty.`);
      } else {
        booked.setBooked([...booked.booked, payload]);
        return clean();
      }
    }
  };

  const EndTime = () => {
    return (
      <S.Time>
        <label name="time">End Time</label>
        <div>
          <select
            name="hour"
            id="hour"
            onChange={(e) => setHoursEnd(e.target.value)}
            value={hoursEnd}
          >
            {hour?.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
          :
          <select
            name="hour"
            id="hour"
            onChange={(e) => setMinutesEnd(e.target.value)}
            value={minutesEnd}
          >
            {minutes?.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
      </S.Time>
    );
  };

  const handleEdit = (id, index) => {
    setIsEdit(true);
    setIndex(index);
    let editable = booked.booked.filter((i) => i.id === id);
    setEdit(editable);
    setDate(editable[0].date);
    setHourStart(editable[0].startHour);
    setMinutesStart(editable[0].startminute);
    setMinutesEnd(editable[0].minutesEnd);
    setHoursEnd(editable[0].hourEnd);
    setAction(editable[0].action);
  };

  return (
    <S.Conteiner>
      <S.Aside>
        <S.Table>
          <thead>
            <tr>
              {tableHeader.map((i) => {
                return <th key={i.id}>{i.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {booked?.booked?.map((i, index) => {
              return (
                <tr key={i.id}>
                  <td>{i.date}</td>
                  <td>{i.start}</td>
                  <td>{i.end}</td>
                  <td className="tr-action">{i.action}</td>
                  <td className="btn-action">
                    <div className="buttons">
                      <button
                        className="edit"
                        onClick={() => handleEdit(i.id, index)}
                      >
                        <img src={editImage} width="10" alt="edit" />
                      </button>
                      <button
                        className="delete"
                        onClick={() => booked.handleDelete(i.id)}
                      >
                        <img src={deleteImage} width="10" alt="delete" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.Table>
      </S.Aside>
      <S.DataPicker>
        <DateSelect />
        <StartTime />
        <EndTime />
        <label htmlFor="action">Action:</label>
        <textarea
          id="action"
          onChange={(event) => setAction(event.target.value)}
          name="action"
          rows="10"
          type="text"
          value={action}
        />
        <button onClick={() => onSubmit()} className="btn-submit">
          Submit
        </button>
      </S.DataPicker>
    </S.Conteiner>
  );
}

export default Content;
