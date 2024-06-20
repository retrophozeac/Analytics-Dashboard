import { Hono } from 'hono'
const app = new Hono()
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.get('/', async (c) => {
    const allUsers = await prisma.orders.findMany();
    return c.json(allUsers);
  })
  
  export default app
  