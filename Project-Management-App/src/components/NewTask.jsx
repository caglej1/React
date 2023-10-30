import { useContext, useState } from "react";
import ProjectTasksContext from "./ProjectTasksContext";

export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState();
  const { setProjectsState } = useContext(ProjectTasksContext);

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={() =>
          setProjectsState((prevState) => {
            console.log(prevState);
            const taskListIndex = prevState.tasks.findIndex(
              (task) => task.id === prevState.selectedProjectId
            );
            if (taskListIndex !== -1) {
              prevState.tasks[taskListIndex].taskList.push(enteredTask);
              return { ...prevState };
            } else {
              return {
                ...prevState,
                tasks: [
                  { id: prevState.selectedProjectId, taskList: [enteredTask] },
                ],
              };
            }
          })
        }
      >
        Add Task
      </button>
    </div>
  );
}
