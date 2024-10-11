const express = require('express')
const mongoose = require('mongoose')
const Product = require("./model/product")
const productRoute = require("./routes/product_routes")
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//route
app.use('/api/products',productRoute)

let connectString = "mongodb+srv://abiabdullahinshaalloh:mb6uH2Y5rQeW1a0k@simple-crud.56cup.mongodb.net/Crud-Api?retryWrites=true&w=majority&appName=Simple-CRUD"

mongoose.connect(connectString)
    .then(() => {
        console.log("Database has been Connected")
        app.listen(3000, () => {
            console.log("Port is listening")
        })
    }).catch(err => {
        console.log(err)
    }
    )

