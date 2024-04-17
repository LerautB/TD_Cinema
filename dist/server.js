"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livreRoutes_1 = __importDefault(require("./routes/livreRoutes"));
const auteurRoutes_1 = __importDefault(require("./routes/auteurRoutes"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use(express_1.default.json());
app.use('/api/livres', livreRoutes_1.default);
app.use('/api/auteurs', auteurRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
