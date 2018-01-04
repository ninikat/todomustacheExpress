const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express()

app.engine('mustache', mustacheExpress())

// setting the body parser to use url encoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// setting the mustache pages directory
app.set('views', './views')

// set the view engine to mustache
app.set('view engine', 'mustache')


// create a list of tasks
let tasks = []


// newcustomer url is a POST url which is invoked when the form is submitted
app.post('/newtask', function(req, res) {

    let task = req.body.task1

    // add a new task
    tasks.push({
        'task': task
    })

    // render the task view passing the updated task list
    res.render('todo', {
        taskList: tasks
    })
    //req.params.firstname

})

app.get('/', function(req, res) {
    res.render('todo', {
        taskList: tasks
    })
})

app.listen(3000, function() {
    console.log("server is running")
})