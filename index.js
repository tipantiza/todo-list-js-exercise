
function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      task.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry"); // task 1
const tasks = [task1, task2]

task1.logTaskState();
task1.completeTask();
task1.logTaskState();

console.log(tasks);
