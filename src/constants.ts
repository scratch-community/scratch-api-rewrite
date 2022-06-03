import { config } from "dotenv";

config();

export default {
    WEBSITE: "scratch.mit.edu",
    HELP: "help@scratch.mit.edu",
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
}