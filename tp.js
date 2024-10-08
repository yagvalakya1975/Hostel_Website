const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan');
dotenv.config();
const port = process.env.port || 3000;

const mongoose = require("mongoose");

// const dbURL = "mongodb+srv://test:test123@brahmaputra.lxlf2xn.mongodb.net/Hostel_Complains?retryWrites=true&w=majority&appName=Brahmaputra";
// mongoose.connect(process.env.dbURL , {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// })
// .then((result) => app.listen(port , ()=>{
//     console.log('Mongo Connected')
// }) )
// .catch((err) => console.log(err));

async function connectToDb() {
    try {
      if (process.env.NODE_ENV == "development") {
        await mongoose.connect(process.env.DB);
        console.log("Mongo running on local port 27017");
      } else if(process.env.NODE_ENV == 'production'){
        await mongoose.connect(process.env.DB , {
                useNewUrlParser : true,
                useUnifiedTopology : true,
            })
      } else {
        console.log("we are not ready with the url");
      }
    } catch (error) {
      console.log("unable to connect to MONGO", error);
    }
  }


const Complain = require("./models/complain");


app.set('view engine' , 'ejs');

app.use(
    cors({
      origin: [process.env.LOCALHOST_URL, process.env.DEPLOYED_URL],
      credentials: true,
    }),
);

app.use(express.static(__dirname));
app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(morgan('dev'));

// app.get('/check' , (req, res)=>{
//     res.send('Working')
// })

// app.get('/', (req,res) => {
//     res.render('index');
// });

// app.get('/index', (req,res) => {
//     res.render('index');
// });

// app.get('/council', (req,res) => {
//     res.render('council');
// });

// app.get('/events', (req,res) => {
//     res.render('events');
// });

// app.get('/ComplainPortal', (req,res) => {
//     res.render('ComplainPortal');
// });


// app.post('/comp' , (req, res) => {
//     const complain = new Complain(req.body);
//     complain.save()
//         .then((result) => {
//             res.send(`
//             <script>
//                 alert("Your Complaint has been registered");
//                 window.location.href = "/ComplainPortal";
//             </script>
//         `);
//         })
//         .catch((error) => {
//             res.send(`
//                 <script>
//                     alert("There was an error registering your complaint");
//                     window.history.back();
//                 </script>
//             `);
//         });
// })

app.get('*' , (req , res)=>{
    res.send(`The Official Website of Brahmaputra website has been shifted to <a href='${process.env.LOCALHOST_URL}'>${process.env.DEPLOYED_URL}</a>`)
})

app.post('/complaints' , async (req, res)=>{
    try {
        const {name , email , phone , room , subject , body} = req.body
        const newComplain = await Complain.create({name:name , email:email , phone:phone , room:room , subject:subject , body:body})
        return res.status(201).json({error:false , message:'Success',data:newComplain})
    } catch (error) {
        return res.status(500).json({error:true , message:'Unsuccessful'})
    }

})

// const adminAuth = require('./middleware/adminAuth.js')

// app.get('/admin/get-complaints' , adminAuth , async(req, res)=>{
//  try {
//    const getComplains = await Complain.find().sort({createdAt:-1}).exec()
//    return res.status(200).json({error:true , message:'Success' , data:getComplains})
//  } catch (error) {
//    return res.status(500).json({error:true , message:'Unsuccessful'})
//  }
// })

app.listen(process.env.PORT, async () => {
    await connectToDb();
    console.log(`Server is running on port:${port}`)
});