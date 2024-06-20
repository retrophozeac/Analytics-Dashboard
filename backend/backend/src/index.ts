import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();
app.get('/', async (c) => {
    
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    console.log("start");
    const allUsers = await prisma.orders.findMany();
    console.log(allUsers);
    return c.json({msg:"done"});
  })
  
  export default app
  