var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");

// middleware for the application
// cross-origin
app.use(cors());
// parse JSON
app.use(bodyParser.json());
// serve css files in the root folder to the client
app.use(express.static('.'));

/*
    Our server-side code is riddled with comments and incomplete code!
    Your task is to complete the code so that everything a user does
    on the client side (browser side) is actually PERSISTED to our
    in-memory datastore. This way if the user refreshes the page,
    their tasks are not lost. This is the key component we need to GA
    this product so get workin'!

    Once you've started the express application with `node app.js`, to
    view the application, go to `http://localhost:3000` in your browser.
    You should see a ToDo list HTML page with a state-of-the-art user
    interface!

    In order to test that the application is working as expected:

    1. Restart the node application by Ctrl+C, Command+C, and/or exiting
    the terminal and then executing `node app.js` again. Or you may
    install nodemon (https://www.npmjs.com/package/nodemon) in this
    directory (`npm install nodemon`). If you run `nodemon app.js`,
    you it will detect any changes made to the files and reload the
    express server automatically.

    2. After updating code, interact with the UI or use cURL
    (https://www.booleanworld.com/curl-command-tutorial-examples/)
    to test your handlers (API endpoints).

    Each handler is annotated with what you need to completed. We've already
    put some filler code that you do not necessarily need to worry about updating.
    For example, the handler to serve the todo.html page to the client is already
    completed for you. If you have any questions, feel free to reach out to your
    new CEO, Anthony, by email.

    GOOD LUCK!
*/

/*
    The in-memory storage is set globally here. There are currently two
    datastore objects to hold TODO and Completed tasks. There is some
    pre-populated data here that we'll definitely remove when we release
    this app to users!
*/

let taskDatastore = {
    "todo": [
        "finish test 2"
    ],
    "completed": [
        "read the test instructions"
    ],
};

// GET handler returns all tasks to the client
app.get('/tasks', (req, res) => {
    res.set('Content-Type', 'application/json');
    /*
        Returns 200 with response body containing the datastore
    */
    res.status(200).send(taskDatastore);
});

// POST handler adds a task to a list
app.post('/task', (req, res) => {
    res.set('Content-Type', 'application/json');

    /*
        Input: data coming into this handler will be in the form:

        {"task": "mytask"}

        You can see contents of the incoming request with:
        console.log(req.body.task). "req" is the request
        and within it, the property req.body holds the incoming data
        above from the client request, hence "task" is a property of
        that incoming request data object.

        Output: This handler should send the datastore back to
        the client with a 201 response code if successful, and return
        and 400 response code with no response body if the task already
        exists in either the TODO or Completed list.
    */

        if(!taskDatastore.todo.includes(req.body.task)){
            taskDatastore.todo.push(req.body.task);
        }
        else {
            return res.status(400).send({});
        }

        

        console.log(`TODO LIST [${taskDatastore.todo}] COMPLETED LIST [${taskDatastore.completed}]`);

    // send 201 status with no response body
    res.status(201).send({})
});

// DELETE handler deletes all tasks in TODO and Completed lists
app.delete('/tasks', (req, res) => {
    /*
        This handler will return 204 status code with an empty
        body when all tasks are deleted from the TODO and Completed
        lists.
    */

    while(taskDatastore.todo.length > 0){
        taskDatastore.todo.pop();
    }

    while(taskDatastore.completed.length > 0){
        taskDatastore.completed.pop();
    }

    console.log(`Clear All TODO LIST [${taskDatastore.todo}] COMPLETED LIST [${taskDatastore.completed}]`);

    // send 204 status code with no response body
    res.status(204).send()
});

// DELETE handler deletes a task from the TODO list
// and adds the task to the Completed list
app.delete('/task/todo/:task', (req, res) => {
    /*
        req.params gets a parameter variable
        The :task part of the path indicates
        data is being passed in the URL instead
        of the query or in post data. To get this
        data, you would use `req.params.task`

        This handler will return 204 status code with
        no response body after deleting the task from the
        TODO list and adding the task to the Completed list.
    */

    /*
        YOUR CODE HERE
    */

    console.log(req.params.task);

    // taskDatastore.todo.pop(req.params.task);
    for(let i = 0; i<taskDatastore.todo.length; i++){
        if(taskDatastore.todo[i] == req.params.task){
            taskDatastore.todo.splice(i,1);
            break;
        }
    }

    taskDatastore.completed.push(req.params.task);

    console.log(`B TODO LIST [${taskDatastore.todo}] COMPLETED LIST [${taskDatastore.completed}]`);

    // send 204 status code with no response body
    res.status(204).send()
});

// DELETE handler deletes a task the client passes via the URL path
app.delete('/task/completed/:task', (req, res) => {
    /*
        This handler (like the previous handler) will return
        a 204 status code with no response body after it deletes
        the task from the Completed list.
    */

        for(let i = 0; i<taskDatastore.completed.length; i++){
            if(taskDatastore.completed[i] == req.params.task){
                taskDatastore.completed.splice(i,1);
                break;
            }
        }

    console.log(`C TODO LIST [${taskDatastore.todo}] COMPLETED LIST [${taskDatastore.completed}]`);

    // send 204 status code with no response body
    res.status(204).send();
});

// This base handler will serve the HTML page todo.html to localhost:3000 when
// the app is started
app.get('/', (req, res) => {
    res.sendFile('todo.html', { root: __dirname });
});

// Listen for HTTP requests on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});