let contact = require("../Models/contactSchema")
let subscribe = require("../Models/subscribeSchema")

let createcontact = async(req,res) =>{
    try{

        const { name , email , phone, service, message } = req.body 
        console.log(req.body)

        let newContact = new contact({
            name,
            email,
            phone,
            service,
            message
        })

        await newContact.save()

        res.send({
            success:true,
            message: 'new contact create successfully'
        })

    }catch(error){
        console.log(error)
        res.send({
            success:false,
            message: error
        })
    }

}


let getAllContact = async(req,res) =>{
    try{

        let data = await contact.find()

        res.send({
            message:" get All users",
            users : data
        })

    }catch(err){
        res.send({
            message:"cannot get user",
            data: err
        })
    }
}

let getContactById = async(req,res)=>{
    try{

        let id = req.params.id

        let userdata = await contact.findById(id)

        res.send({
            message:" get one user",
            users : userdata
        })

    }catch(err){
        res.send({
            message:"cannot get user",
            data: err
        })
    }
}

let updateContact = async(req,res) =>{
    try{
        let id = req.params.id 

        let { name , email , phone, service, message } = req.body

        let updatedata = await contact.findByIdAndUpdate(id, { name , email , phone, service, message })

        res.send({
            message:"update user ",
            data : updatedata
        })

    }catch(err){
        res.send({
            message:"error on update user",
            data : err
        })
    }
}

let deleteContact = async(req,res) =>{
    try{

        let id = req.params.id

        await contact.findByIdAndDelete(id)
        
        res.send({
            message:` user delete ${id}`
        })

    }catch(err){
        res.send({
            message:"error on delete user",
            data : err
        })
    }
}


let Subscribe = async(req,res) =>{
    try{

        const { email } = req.body 
        // console.log(req.body)

        let newSubscribe = new subscribe({
            email
        })

        await newSubscribe.save()

        res.send({
            success:true,
            message: 'new contact create successfully'
        })

    }catch(error){
        console.log(error)
        res.send({
            success:false,
            message: error
        })
    }
}


module.exports = { createcontact , getAllContact , getContactById , updateContact , deleteContact,Subscribe}