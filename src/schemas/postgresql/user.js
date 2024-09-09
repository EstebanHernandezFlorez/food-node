import z from 'zod'

const userSchema = z.object({
  id_user: z.number().int().positive(),
  id_role: z.number().int().positive(),
  email: z.string().email()._addCheck(value => value.length <= 255)._addCheck(value => value.match(/^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$/)),
  password: z.string()._addCheck(value => value.length <= 255),
  state: z.boolean().default(true)
})

export function validateAuth (input) {
  return userSchema.parse(input)
}
