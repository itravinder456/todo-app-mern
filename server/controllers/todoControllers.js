const mongoose = require("mongoose");
const getNextSequenceValue = require("../models/counter")
const helpers = require("../helpers/helperFunctions");
const Todo = require("../models/todoModel")

exports.getUserTodos = (req, res, next) => {
    Todo.find({ userId: req.headers.userid, status: 1 }).then((todos) => {
        return res.status(200).json({
            status: true,
            data: todos
        });
    })
};
exports.createUserTodo = (req, res, next) => {
    let todoObject = req.body;
    todoObject.userId = req.headers.userid;
    todoObject.createdUserId = req.headers.userid;
    todoObject.createdDate = new Date();
    let todo = new Todo(todoObject);
    todo.save().then((result) => {
        return res.status(200).json({
            status: true,
            message: "Todo created successfully",
            data: result
        });
    })

};
exports.updateUserTodo = (req, res, next) => {
    let updateObject = req.body;
    updateObject.modifiedUserId = req.headers.userid;
    updateObject.modifiedDate = new Date();
    Todo.findByIdAndUpdate({ _id: req.body._id }, { $set: updateObject }, { new: true }).then((result) => {
        return res.status(200).json({
            status: true,
            message: "Todo was updated",
            data: result
        });
    })
};
exports.deleteUserTodo = (req, res, next) => {
    Todo.findOneAndUpdate({ _id: req.body._id }, { $set: { status: 0 } }).then((result) => {
        return res.status(200).json({
            status: true,
            message: "Todo was deleted"
        });
    })
};

exports.getAllUsersTodos = (req, res, next) => {
    Todo.find({ status: 1, userId: { $ne: req.headers.userid } }).then((todos) => {
        return res.status(200).json({
            status: true,
            data: todos
        });
    })
};