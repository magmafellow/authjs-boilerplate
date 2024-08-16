import { z } from 'zod'

export const signInSchemaCredentials = z.object({
  pseudonim: z.string().min(3),
  password: z.string().min(4),
})

export const signUpSchemaCredentials = z.object({
  pseudonim: z.string().min(3),
  password: z.string().min(4),
  password_repeat: z.string().min(4),
})

export const updateProfileSchema = z.object({
  name: z.string().min(3),
  pseudonim: z.string().min(3)
})
