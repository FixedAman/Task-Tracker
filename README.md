<h1>Task Tracker CLI</h1>

<p>
A command-line task management application built with Node.js and TypeScript as part of the roadmap.sh Task Tracker project.
</p>

<h2>Features</h2>

<ul>
  <li>Add tasks</li>
  <li>Update tasks</li>
  <li>Delete tasks</li>
  <li>Mark tasks as completed</li>
  <li>Mark tasks as in progress</li>
  <li>List all tasks</li>
  <li>Filter tasks by status</li>
  <li>JSON file persistence</li>
  <li>Error handling and corrupted file recovery</li>
</ul>

<h2>Technologies Used</h2>

<ul>
  <li>Node.js</li>
  <li>TypeScript</li>
  <li>File System (fs)</li>
  <li>JSON</li>
</ul>

<h2>Installation</h2>

<ol>
  <li>Clone the repository:</li>
</ol>

<pre>
git clone https://github.com/FixedAman/Task-Tracker.git
</pre>

<ol start="2">
  <li>Navigate to the project directory:</li>
</ol>
<h3> create Task-Tracker any folder <h3/>
<pre>
cd Task-Tracker
</pre>

<ol start="3">
  <li>Install dependencies:</li>
</ol>

<pre>
npm install
</pre>

<h2>Run the Project</h2>

<pre>
npm run dev
</pre>

<h2>Usage</h2>

<h3>Add a Task</h3>

<pre>
add
</pre>

<p>Example:</p>

<pre>
Buy groceries
</pre>

<h3>Update a Task</h3>

<pre>
update
</pre>

<p>Example:</p>

<pre>
1 Buy groceries and cook dinner
</pre>

<h3>Delete a Task</h3>

<pre>
delete
</pre>

<p>Example:</p>

<pre>
1
</pre>

<h3>Mark a Task as Done</h3>

<pre>
mark-done
</pre>

<p>Example:</p>

<pre>
1
</pre>

<h3>Mark a Task as In Progress</h3>

<pre>
mark-in-progress
</pre>

<p>Example:</p>

<pre>
1
</pre>

<h3>List Tasks</h3>

<p>Show all tasks:</p>

<pre>
list
</pre>

<p>Filter by status:</p>

<pre>
todo
done
in-progress
</pre>

<h2>Data Format</h2>

<p>Tasks are stored in a local JSON file.</p>

<pre>
{
  "tasks": [
    {
      "id": 1,
      "description": "Buy groceries",
      "status": "todo",
      "createdAt": "2025-01-01T10:00:00.000Z",
      "updatedAt": "2025-01-01T10:00:00.000Z"
    }
  ]
}
</pre>

<h2>Error Handling</h2>

<ul>
  <li>Invalid task IDs</li>
  <li>Missing files</li>
  <li>File read/write failures</li>
  <li>Corrupted JSON data</li>
</ul>

<p>
When corrupted data is detected, a backup is created automatically and a fresh data file is generated.
</p>

<h2>roadmap.sh Project</h2>

<p>
https://roadmap.sh/projects/task-tracker
</p>
