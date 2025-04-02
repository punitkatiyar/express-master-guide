import  express from 'express';
import {connectDB} from './config/database.js';
import userRouters from "./routes/userRouters";

const app = express();
const port = 5000;
// api routes endpoint

// template 
app.set();
app.set()




// middelware
app.use(express.json())
app.use('/admin', require("./routes/userRouters"))




app.post('/page', (req, res) => {
    const { inputData1, inputData2 } = req.body;
    res.json({
        success: true,
        message: `Hello ${inputData1} ${inputData2}`,
    })
})





app.listen(port, () => {
    console.log(`Express app live now ${port}`.bgGreen);
})
