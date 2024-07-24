import { z } from 'zod';

export const ItemValidation = z.object({
  id: z.coerce.number()
});
