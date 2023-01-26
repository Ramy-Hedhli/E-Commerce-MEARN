const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const UserRouter = require('./routes/User')
const CategoryRouter = require('./routes/categoryRouter')
const ProductRouter = require('./routes/productRouter')
const PaymentRouter = require('./routes/paymentRouter')
const PanelRouter = require('./routes/panelRouter')
mongoose.set('strictQuery', false);

const app = express()
app.use(express.json())
app.use(cookieParser())
// app.use(cors())
require('dotenv').config()

app.use(fileUpload({
    useTempFiles: true,
}));

//API Routes
app.use('/user', UserRouter)
app.use('/category', CategoryRouter)
app.use('/Product', ProductRouter)
app.use('/Payment', PaymentRouter)
app.use('/order', PanelRouter)




//connect mongoDB
const port = process.env.PORT
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => console.log(`Server running on ${port}, DB connected`))
}).catch((error) => console.log(`${error} did not connect`))



