"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
require('dotenv/config');
function authenticateToken(request, response, next) {
    var authHeader = request.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return response.status(401).json({ message: "Token no provided" });
    jwt.verify(token, process.env.SECRET_JWT, function (err, user) {
        if (err)
            return response.status(401).json({ message: "Acesso inválido" });
        request.user = {
            id: user.id
        };
        return next();
    });
}
exports.default = authenticateToken;
//# sourceMappingURL=auth.js.map