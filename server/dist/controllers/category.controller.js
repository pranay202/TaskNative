"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.updateCategory = exports.deleteCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategories = void 0;
var category_model_1 = __importDefault(require("../models/category-model"));
var task_model_1 = __importDefault(require("../models/task-model"));
var getAllCategories = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user, categories, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = request.user;
                return [4 /*yield*/, category_model_1["default"].find({
                        user: user
                    })];
            case 1:
                categories = _a.sent();
                return [2 /*return*/, response.send(categories)];
            case 2:
                error_1 = _a.sent();
                response.send({ error: "Something went wrong" });
                console.log("error in getAllCategories", error_1);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllCategories = getAllCategories;
/**
 *
 * @param request TODO: Record get category by id
 * @param response
 * @returns
 */
var getCategoryById = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user, id, category, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = request.user;
                id = request.params.id;
                return [4 /*yield*/, category_model_1["default"].findOne({
                        _id: id
                    })];
            case 1:
                category = _a.sent();
                return [2 /*return*/, response.send(category)];
            case 2:
                error_2 = _a.sent();
                response.send({ error: "Something went wrong" });
                console.log("error in getAllCategories", error_2);
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCategoryById = getCategoryById;
var createCategory = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, color, icon, name_1, user, category, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, color = _a.color, icon = _a.icon, name_1 = _a.name;
                user = request.user;
                return [4 /*yield*/, category_model_1["default"].create({
                        color: color,
                        icon: icon,
                        name: name_1,
                        user: user
                    })];
            case 1:
                category = _b.sent();
                response.send(category);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.log("error in createCategory", error_3);
                response.send({ error: "Something went wrong" });
                throw error_3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createCategory = createCategory;
var deleteCategory = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, category, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = request.params.id;
                return [4 /*yield*/, task_model_1["default"].deleteMany({
                        categoryId: id
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, category_model_1["default"].deleteOne({
                        _id: id
                    })];
            case 2:
                category = _a.sent();
                response.send({ message: "Category deleted successfully" });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                response.send({ error: "Error in deleting the category" });
                throw error_4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteCategory = deleteCategory;
var updateCategory = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, color, icon, isEditable, name_2, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, _id = _a._id, color = _a.color, icon = _a.icon, isEditable = _a.isEditable, name_2 = _a.name;
                return [4 /*yield*/, category_model_1["default"].updateOne({
                        _id: _id
                    }, {
                        $set: {
                            name: name_2,
                            color: color,
                            icon: icon,
                            isEditable: isEditable
                        }
                    })];
            case 1:
                _b.sent();
                response.send({ message: "Category updated successfully" });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                console.log("error in updateCategory", error_5);
                response.send({ error: "Error in updating the category" });
                throw error_5;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateCategory = updateCategory;
