const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.port || 3000;

const mongoose = require("mongoose");

const dbURL = "mongodb+srv://test:test123@brahmaputra.lxlf2xn.mongodb.net/Hostel_Complains?retryWrites=true&w=majority&appName=Brahmaputra";
mongoose.connect(dbURL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then( (result) => app.listen(port) )
.catch((err) => console.log(err));


const Complain = require("./models/complain");


app.set('view engine' , 'ejs');



app.use(express.static(__dirname));
app.use(express.urlencoded({ extended : true }));
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/index', (req,res) => {
    res.render('index');
});

app.get('/council', (req,res) => {
    res.render('council');
});

app.get('/events', (req,res) => {
    res.render('events');
});

app.get('/ComplainPortal', (req,res) => {
    res.render('ComplainPortal');
});


app.post('/comp' , (req, res) => {
    const complain = new Complain(req.body);
    complain.save()
        .then((result) => {
            res.send(`
            <script>
                alert("Your Complaint has been registered");
                window.location.href = "/ComplainPortal";
            </script>
        `);
        })
        .catch((error) => {
            res.send(`
                <script>
                    alert("There was an error registering your complaint");
                    window.history.back();
                </script>
            `);
        });
})