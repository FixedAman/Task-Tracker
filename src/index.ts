import { stdin } from "node:process";
import * as readline from "node:readline";
import { addFunction, Status } from "./handlers/handles-addFunction.js";
import { handleDeleteFunction } from "./handlers/handle-deleteFunction.js";
import {
  handleStatusUpdate,
  handleUpdate,
} from "./handlers/handleUpdateFunction.js";
import { getList } from "./handlers/handle-listfuncion.js";
// to interact with user with cli  user user only give string value
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// to keep repeating those command used a keep on basic function **
function keepOn() {
  console.log(`
Available commands:
- add
- update
- delete
- mark-done
- mark-in-progress
- list
`);
  rl.question("Command: ", (data) => {
    // use switch case for command better than if and else
    switch (data) {
      case "add":
        rl.question("what u want to add: ", (data) => {
          addFunction(data);
          keepOn();
        });
        break;
      case "delete":
        rl.question("Enter task ID to delete: ", (id) => {
          handleDeleteFunction(Number(id));
          keepOn();
        });
        break;
      case "update":
        rl.question(
          "Enter task ID followed by the new updated task name: ",
          (input) => {
            const [id, ...remainingData] = input.split(" ");
            const taskId = Number(id);
            const description = remainingData.join(" ");
            handleUpdate(taskId, description);
            keepOn();
          },
        );
        break;
      case `list`:
        console.log(`
           Available list filters:
             - all
             - todo
             - in-progress
             - done
              `);
        rl.question("command: ", (stat: string) => {
          getList(stat);
          keepOn();
        });

        break;
      case "mark":
        rl.question("give the status and give id :", (input) => {
          const [id, ...description] = input.split(" ");
          let userId = Number(id);
          let status = description.join(" ").toLowerCase();
          if (
            status === Status.in_progress ||
            status === Status.done ||
            status === Status.todo
          ) {
            handleStatusUpdate(userId, status);
          }
        });
        break;
      default:
        console.log("Invalid command!");
        rl.close();
    }
  });
}
keepOn();
