import z from 'zod'

export const signupInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

// type interferance in zod 

export type signupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
})

// type interferance in zod 

export type signinInput = z.infer<typeof signinInput>


// Blog Post 

export const createBlogInput = z.object({
    title : z.string(),
    content : z.string()
})

// type interferance in zod 

export type createBlogInput = z.infer<typeof createBlogInput>


// Update Blog

export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
    id: z.number()
})

// type interferance in zod 

export type updateBlogInput = z.infer<typeof updateBlogInput>