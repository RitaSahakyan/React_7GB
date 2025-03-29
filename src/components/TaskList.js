import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (status === "loading") return <p>Загрузка...</p>;
  if (status === "failed") return <p>Ошибка загрузки</p>;

  return (
    <ul>
      {items.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
