const { JSONResponse } = require('../lib/helper')
const Items = require('../models/items.model')

exports.getAllItems = async (req, res) => {
 try {
    const items = await Items.find() 
        JSONResponse.success(res, 'Success', items, 200)
 } catch (error) {
    console.log(error)
    JSONResponse.error(res, 'Failure handling item model', error, 500)
 }
}

exports.getItemsbyId = async (req, res) => {
    try {
        const items = await Items.findById(req.params.id)
        JSONResponse.success(res, 'Success', items, 200);
    } catch (error) {
        console.log(error)
        JSONResponse.error(res, 'Failure handling item model', error, 500);
    }
}

/* create item */

exports.createItem = async (req, res) => {
    try {
        const item = await Items.create(req.body)
        JSONResponse.success(res, 'Success', item, 200);
    } catch (error) {
        console.log(error)
        JSONResponse.error(res, 'Failure handling item model', error, 500);
    }
}

exports.updateItem = async (req, res) => {
    try {
        const item = await Items.findByIdAndUpdate({_id:req.params.id}, req.body)
        JSONResponse.success(res, 'Success', item, 200);
    } catch (error) {
        console.log(error)
        JSONResponse.error(res, 'Failure handling item model', error, 500);
    }
}

exports.deleteItemById = async (req, res) => {
    try {
        const item = await Items.findById(req.params.id)
        if (item) await item.delete() 
        JSONResponse.success(res, 'Success', item, 200);
    } catch (error) {
        console.log(error)
        JSONResponse.error(res, 'Failure handling item model', error, 500);
    }
}