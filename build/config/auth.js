"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv/config');
exports.default = {
    secret: process.env.SECRET_JWT,
    expiresIn: '5m',
};
//# sourceMappingURL=auth.js.map