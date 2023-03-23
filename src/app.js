import dotenv from 'dotenv'
import express  from 'express'
import RouterUser from './routes/products.js'

const app = express();
dotenv.config();
app.use(express.json())
app.use('/api',RouterUser);
app.listen(process.env.PORT,function(){
    console.log(process.env.PORT);
    console.log(`Server is running port ${process.env.PORT}`);
})
