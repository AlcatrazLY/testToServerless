const Express = require('express');
const bodyParser = require('body-parser')
const app =  Express();
app.use(Express.urlencoded({extended:false}));
app.use(bodyParser.json()); 
const taskRoutes = require('../routes/taskRoutes');

app.use('/tasks', taskRoutes);
/*
exports.initServer =() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
*/