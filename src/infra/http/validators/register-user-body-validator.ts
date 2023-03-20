import { z } from 'zod'

const NAME_MIN_LENGTH = 2
const PASSWORD_MIN_LENGTH = 8

export const registerUserBodyValidator = z.object({
  name: z.string().min(NAME_MIN_LENGTH),
  email: z.string().email(),
  password: z.string().min(PASSWORD_MIN_LENGTH),
})
