import * as fs from "node:fs";
import type { Usertask } from "./handles-addFunction.js";
export function getList(stat: string) {
  // fetching the all tasks from the json
  const data: { tasks: Usertask[] } = JSON.parse(
    fs.readFileSync("user_data.json", "utf8"),
  );
  // get all tasks
  if (stat === "all") {
    console.log(
      data.tasks.map((t) => {
        const { description, status, id } = t;
        return { taskn: id, task: description, status };
      }),
    );
  }
  // specified list getting
  if (stat === "in-progress" || stat === "done" || stat === "todo") {
    const task = data.tasks.filter((t) => t.status === stat);
    console.log(
      task.map((t) => {
        return { status: t.status, task: t.description };
      }),
    );
  }
}
