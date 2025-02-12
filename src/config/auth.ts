import { sign, verify } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export class Auth {
  static gerarToken(id: string, email: string) {
    return sign({ id, email }, SECRET, { expiresIn: "30d" });
  }

  static verificarToken(token: string) {
    return verify(token, SECRET);
  }
}
