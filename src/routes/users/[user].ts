import type { Request, Response } from "restify";
import { client } from "../../common/db";

export default async function (req: Request, res: Response) {
    console.log("name: ", req.params.user)
    const user = await client.from("users").select().eq("username", req.params.user);

    if (user.data.length === 0) {
        return res.json(404, { code: "ResourceNotFound", "message": `${req.path} does not exist`});
    } else if (user.error) {
        return res.json(500, { code: "InternalServerError", "message": "Error fetching user" });
    }

    return res.json(200, {
        id: user.data[0].id,
        username: user.data[0].username,
        scratchteam: user.data[0].scratchteam,
        history: {
            joined: user.data[0]["history.joined"]
        },
        profile: {
            id: user.data[0]["profile.id"],
            images: {}, // TODO: add image support
            status: user.data[0]["profile.status"],
            bio: user.data[0]["profile.bio"],
            country: user.data[0]["profile.country"],
        }
    })
}