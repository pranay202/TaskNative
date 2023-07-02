"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var db_1 = __importDefault(require("./db"));
var category_routes_1 = __importDefault(require("./routes/category.routes"));
var task_routes_1 = __importDefault(require("./routes/task.routes"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var application = (0, express_1["default"])();
application.use(express_1["default"].json());
application.use((0, cors_1["default"])({ origin: true, credentials: true }));
var PORT = 1337;
(0, db_1["default"])();
application.get("/ping", function (request, response) {
    response.send("Pong");
});
application.use("/users", user_routes_1["default"]);
application.use("/categories", category_routes_1["default"]);
application.use("/tasks", task_routes_1["default"]);
application.listen(PORT, function () {
    console.log("Server up and running on PORT: " + PORT);
});
