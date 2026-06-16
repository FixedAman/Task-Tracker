import * as fs from "node:fs";
import type { Status, Usertask } from "./handles-addFunction.js";

function handleUpdate(id: number, desc: string) {
  const data: { tasks: Usertask[] } = JSON.parse(
    fs.readFileSync("user_data.json", "utf8"),
  );
  // findinig the tasks using the id

  const updationData = data.tasks.find((t) => t.id === id);
  if (!updationData) return console.log("Task did not found! ");
  // directly change that object 
  updationData.description = desc;
  updationData.updatedAt = new Date().toISOString();
  fs.writeFileSync("user_data.json", JSON.stringify(data), "utf8");
  console.log("updated!!");
}

function handleStatusUpdate(id: number, status: Status) {
  const data: { tasks: Usertask[] } = JSON.parse(
    fs.readFileSync("user_data.json", "utf8"),
  );
  // handle status update same to same like update block of code 
  const filterTask = data.tasks.find((t) => t.id === id);
  if (!filterTask) {
    console.log(`Task with ID ${id} was not found.`);
    return;
  }
  filterTask.status = status;
  filterTask.updatedAt = new Date().toISOString();
  fs.writeFileSync("user_data.json", JSON.stringify(data, null, 2), "utf8");
  console.log("Status updated!");
}

export { handleUpdate, handleStatusUpdate };
