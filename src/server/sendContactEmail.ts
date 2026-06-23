import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  type: z.string().min(1),
  message: z.string().min(1),
});

export const sendContactEmail = createServerFn({ method: "POST" }).handler(
  async (input: { data: unknown }) => {
    const data = schema.parse(input.data ?? input);
    const { sendProjectEmail } = await import("./emailSender.server");
    await sendProjectEmail(data);
    return { success: true };
  },
);
