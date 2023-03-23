const express= require("express")
const cors= require("cors")
const app= express()
app.use(express.json())
const port= 4000;
app.use(cors())

// const bodyparser= require("body-parser")
// app.use(bodyparser.json())


app.use('/uploads', express.static("uploads"))

const {product_routes} = require("./routes/product.route")
app.use("/", product_routes)

app.listen(port,(err) =>{
    if(err){
        console.log(err.sqlMessage)
    }
    else{
        console.log("server connected")
    }
})
