import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export class Auth {
  static gerarToken(id: string, email: string) {
    return jwt.sign({ id, email }, SECRET, { expiresIn: "30d" });
  }

  static verificarToken(token: string) {
    return jwt.verify(token, SECRET);
  }
}
