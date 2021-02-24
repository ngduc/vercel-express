"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3030; // default port to listen
app.get('/api', (req, res) => {
    const randomId = `${Math.random()}`.slice(2);
    const path = `/api/item/${randomId}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
app.get('/api/item/:itemId', (req, res) => {
    const { itemId } = req.params;
    res.json({ itemId });
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map