import { useContext } from "react";
import NewTask from "./NewTask";
import ProjectTasksContext from "./ProjectTasksContext";

export default function Tasks() {
  const { projectsState } = useContext(ProjectTasksContext);

  const taskListIndex = projectsState.tasks.findIndex(
    (task) => task.id === projectsState.selectedProjectId
  );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 my-4">
        This project does not have any tasks yet.
      </p>
      <ul>
        {(taskListIndex !== -1) && projectsState.tasks[taskListIndex].taskList.map((task) => <li key={Math.random()}>{task}</li>)}
      </ul>
    </section>
  );
}
