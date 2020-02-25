import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";
import * as express from "express";
import * as proxy from "proxy-middleware";
import * as url from "url";

const config = require("./webpack.config");
const proxyPort = 9799;
const port = process.env.port || 9798;

/** ----------------------------------------
 *      Server proxy code
 *  ----------------------------------------*/

const app = express();
app.use('/assets', proxy(url.parse("http://localhost:9799/assets")));
app.get("/*", (req, res) => {
    res.sendFile("index.html");
});

/** ----------------------------------------
 *      Server code
 *  ----------------------------------------*/

const server = new webpackDevServer(webpack(config));
server.listen(proxyPort, "localhost");
app.listen(port, "localhost");

/** ----------------------------------------
 *      Hot Module Reload code
 *  ----------------------------------------*/

let module;
if (module.hot) {
    module.hot.accept();
}
