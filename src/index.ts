const restify = require("restify");
import constants from "./constants";

const server = restify.createServer({
    name: "scratch-api",
});

server.get("/", (req, res) => {
    res.json({ website: constants.WEBSITE, api: req.header("host"), help: constants.HELP });
})



server.listen(3000)