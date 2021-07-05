var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {

        // Seed database
        var starterTodos = [
            {   username: "Rudolph",
                todo: "Buy milk",
                isDone: false,
                hasAttachment: false },
            
            {   username: "Tree Trunks",
                todo: "Reap apples",
                isDone: false,
                hasAttachment: false }
        ];

        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}