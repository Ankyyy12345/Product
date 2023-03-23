const Connection = require("../models/dbConnection")
const express = require('express')


let getproduct = async(req,res)=>{
    try{
        const q1 = "select * from product_table"
        await Connection.query(q1, (error,result,fields)=>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};



let postproduct = async(req, res) => {
    try{

        const data ={id:req.body.id, product_name:req.body.product_name, product_description:req.body.product_description, 
                     product_price:req.body.product_price,product_category:req.body.product_category,
                     upload_image:req.file.path,}

        const q1 = "insert into product_table SET ?";
        await Connection.query(q1, data, (err, result, fields) => {
            if (err){
                res.send(err.sqlMessage);
            }
            res.send({status:200,Response:result});
        })
    } catch (err){
        res.send(err.sqlMessage);
    }
};


let updateproduct = async (req, res) => {
    try{
        const data =[req.body.product_name,req.body.product_description,req.body.product_price,req.body.product_category,req.file.path, req.params.id]
        console.log("data",data)
        const q2 = "UPDATE product_table SET product_name=?, product_description=?, product_price=?, product_category=?, upload_image=? WHERE id=?"
        await Connection.query(q2, data, (err, result) =>{
            console.log("result",result)
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}



let deleteproduct = async (req, res) =>{
    try{
        const data = req.params.id;
        const q2 = "delete from product_table where id = ? "
        await Connection.query(q2, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}  


module.exports = {getproduct, postproduct, updateproduct, deleteproduct}
