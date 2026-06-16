import * as fs from "node:fs";
// enums and interface for typeScript rules
export enum Status {
  todo = "todo",
  in_progress = "in-progress",
  done = "done",
}
export interface Usertask {
  id: number;
  description: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
// id generation
let nextId = 1;
// main object
let mainObj = {
  tasks: [] as Usertask[],
};

export function addFunction(data: string) {
  const exists = fs.existsSync("user_data.json");
  // if json exist  then this block of code will run
  if (exists) {
    fs.readFile("user_data.json", "utf8", (err, readmeData) => {
      if (err) {
        console.error("Error while appending : ", err);
        return;
      }
      try {
        let obj: { tasks: Usertask[] } = JSON.parse(readmeData);
        // id generation for currect next it 
        let lastTask = obj.tasks[obj.tasks.length - 1];
        let nextId: number = lastTask ? lastTask.id + 1 : 1;
        obj.tasks.push({
          id: nextId,
          status: Status.todo,
          description: data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        let json = JSON.stringify(obj, null, 2);
        fs.writeFile("user_data.json", json, "utf8", (err) => {
          if (err) {
            console.error(
              "Failed to write updated tasks to user_data.json: ",
              err,
            );
            return;
          }
        });
        console.log(`Task added successfully (ID: ${nextId})`);
      } catch (error) {
        console.error("Corrupted data detected in user_data.json.");
        fs.renameSync(
          "user_data.json",
          `user_data_backup_${Date.now()}_corrupted.json`,
        );
      // freshing data to inserting data 
        const freshData = {
          tasks: [
            {
              id: nextId++,
              status: Status.todo,
              description: data,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        };
        fs.writeFileSync(
          "user_data.json",
          JSON.stringify(freshData, null, 2),
          "utf8",
        );
        console.log(`Task added successfully (ID: ${nextId})`);
      }
    });
  } else {
    // other wise this will run  to make a new file
    mainObj.tasks.push({
      id: nextId++,
      description: data,
      status: Status.todo,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    let json = JSON.stringify(mainObj, null, 2);
    fs.writeFile("user_data.json", json, "utf8", (err) => {
      if (err) {
        console.error("writing error : ", err);
        return;
      }
    });
  }
}
