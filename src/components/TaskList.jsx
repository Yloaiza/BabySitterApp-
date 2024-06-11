//componente que renderiza las TaskCard
import { useEffect, useState } from "react";
import { getAllReservation } from "../api/reservations.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const [reservations, setReservation] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const res = await getAllReservation();
      setReservation(res.data);
    }
    loadTask();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {reservations.map((reservations) => (
        <TaskCard key={reservations.id} reservations={reservations} />
      ))}
    </div>
  );
}
