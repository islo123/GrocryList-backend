const List = require("../models/list")


const getAllLists =async function (req, res){
    try{
        // Query
        const lists = await List.find({}) // tasks nimi on taulu ja se pitä olla sama backendissa ja front-endissa
        res.status(200).json({lists})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const newListItem =async function (req, res){
    try{
        const list = await List.create(req.body) // POST eli tee Task bodyssa eli uusi task
        res.status(201).json({list}) // jos status 201 näyttää json  task
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const deleteList = async function (req,res){
    try{
        const {id: listID} = req.params
        const list= await List.findOneAndDelete({_id: listID})
        if(!list){
            return res.status(404).json({msg: `no Task with id ${listID}`})
        }
        res.status(200).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const updateList = async function (req,res){
    try{
        const {id: listID} = req.params
        const list = await List.findOneAndUpdate({_id: listID}, req.body,{
            new: true,
            runValidators: true
        }) // Find id ja uptdate body. new return new item. runValidators make validatoring work esim. required
        if(!list){
            return res.status(404).json({msg: `no task with id ${listID}`})
        }
        res.status(200).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const deleteAll = async (req, res) => {
    try{
        const lists = await List.deleteMany({})
        res.status(200).json({lists})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

module.exports = {newListItem, getAllLists, updateList, deleteList, deleteAll};