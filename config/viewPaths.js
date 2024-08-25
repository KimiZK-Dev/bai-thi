import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const clientViewPath = path.join(__dirname, "..", "client", "views");
export const adminViewPath = path.join(__dirname, "..", "admin", "views");
