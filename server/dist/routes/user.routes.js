"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controllers/user.controller");
var userRoutes = express_1["default"].Router();
userRoutes.route("/create").post(user_controller_1.createUser);
userRoutes.route("/login").post(user_controller_1.loginUser);
exports["default"] = userRoutes;
