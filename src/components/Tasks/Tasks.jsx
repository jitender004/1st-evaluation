import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todo}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
       <Task todo={todo} />
        {/*  */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
          
      </div>
    </>
  );
};

export default Tasks;
