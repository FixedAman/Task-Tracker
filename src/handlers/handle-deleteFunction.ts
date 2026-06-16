import * as fs from "node:fs";
import type { Usertask } from "./handles-addFunction.js";
export const handleDeleteFunction = (id: number) => {
  const data: { tasks: Usertask[] } = JSON.parse(
    fs.readFileSync("user_data.json", "utf8"),
  );
  const filterdTasks = { tasks: data.tasks.filter((t) => t.id !== id) };
  const json = JSON.stringify(filterdTasks, null, 2);
  if (filterdTasks.tasks.length === data.tasks.length) {
    console.log("Task not found!");
    return;
  }
  fs.writeFile("user_data.json", json, "utf8", (err) => {
    if (err) {
      console.log("An error occurred while deleting the task:", err);
      return;
    }
    console.log(`Task deleted successfully (ID: ${id})`);
  });
};
