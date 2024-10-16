import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(60, {
      message: "El nombre debe tener menos de 60 caracteres",
    }),
  email: z.string().email({
    message: "El email no es valido",
  }),
  mensaje: z
    .string()
    .min(6, { message: "El mensaje debe tener al menos 6 caracteres" })
    .max(5000, {
      message: "El mensaje debe tener menos de 5000 caracteres",
    }),
});
