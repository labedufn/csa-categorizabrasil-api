import { z } from "zod";

export const authHeadersSchema = z.object({
  authorization: z
    .string({
      required_error: "O header 'authorization' é obrigatório",
    })
    .nonempty("O token deve ser informado"),
});
