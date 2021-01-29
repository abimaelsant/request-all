"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var AuthRepository_1 = require("../repository/user/AuthRepository");
var UserRepository_1 = require("../repository/user/UserRepository");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv/config');
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.login = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var authRepository, userRepository, body, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authRepository = new AuthRepository_1.default();
                        userRepository = new UserRepository_1.default();
                        body = { email: request.body.email, password: request.body.password };
                        return [4 /*yield*/, userRepository.findByEmail(body.email)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, response.status(401).json({ message: 'E-mail e/ou senha incorretos' })];
                        bcrypt.compare(body.password, user.password, function (err, data) {
                            if (err)
                                throw err;
                            if (data) {
                                var res = jwt.sign({ id: user.id, name: user.name }, process.env.SECRET_JWT, { expiresIn: '1800s' });
                                return response.status(201).json({ message: "Login realizado com sucesso.", res: res });
                            }
                            else {
                                return response.status(401).json({ message: 'E-mail e/ou senha incorretos' });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return AuthController;
}());
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map