import { createServer } from "restify";
import constants from "./constants";

import GetUserRoute from "./routes/users/[user]";

const server = createServer({
    name: "scratch-api",
});

server.get("/", (req, res) => {
    res.json({ website: constants.WEBSITE, api: req.header("host"), help: constants.HELP });
})

server.get("/users/:user", GetUserRoute);



server.listen(3000, () => {
    console.log("scratch-api: listening on port 3000");
})