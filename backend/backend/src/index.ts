import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {cors} from 'hono/cors';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();
app.use('/*',cors());

function formatDate(dateString:any) {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString('en-US', { month: 'short' });

  // Function to get the ordinal suffix
  const getOrdinalSuffix = (day:any) => {
    if (day > 3 && day < 21) return 'th'; // All days between 4th and 20th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${getOrdinalSuffix(day)} ${month}`;
}



app.get('/:date', async (c) => {
  let givendate = Number(c.req.param('date'))||0;
  let newDate = new Date('03/30/2019');
  newDate.setDate(newDate.getDate() - givendate+1);
  console.log(newDate);
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
  console.log("s")
  const City = await prisma.orders.groupBy({
    by: ['City'],
    _sum: {
      Total: true,
    },
    where: {
      Date_new: {
        gt: newDate
      },
    },
  })
  const Product_line = await prisma.orders.groupBy({
    by: ['Product_line'],
    _sum: {
      Total: true,
    },
    where: {
      Date_new: {
        gt: newDate
      },
    },
  })
  const Date_new = await prisma.orders.groupBy({
    by: ['Date_new'],
    _sum: {
      Total: true,
    },
    where: {
      Date_new: {
        gt: newDate
      },
    },
    orderBy: {
      Date_new: 'asc', 
    },
  })
  const result = await prisma.orders.aggregate({
    _sum: {
      Total: true,
      gross_income:true
    },
    _count: {
      Total: true,
    },
    where: {
      Date_new: {
        gt: newDate
      },
    },
  })

  const City_1 = City.map(item => ({
    id: item.City,
    value: Number(item._sum.Total),
  }))
  const Product_line_1 = Product_line.map(item => ({
    name: item.Product_line,
    count: item._sum.Total,
  }))
  const Date_new_1 = Date_new.map(item => ({
    x: formatDate(item.Date_new),
    y: item._sum.Total,
  }))
  // console.log(result)
  // console.log("e")
  // console.log(City_1)
  // console.log(Product_line_1)
  console.log(Date_new_1)
  const data = {
    totalRevenue:result._sum.Total,
    revenueChange: 15,
    totalProfit:result._sum.gross_income,
    totalOrders:result._count.Total,
    customersChange: 20,
    conversionRate: 12.5,
    conversionRateChange: 2,
    CityData:City_1,
    ProductData:Product_line_1,
    DateData:[{
      id:"Date",
      data:Date_new_1
    }],
    customerSatisfaction: [
      { date: "2023-01-01", value: 4 },
      { date: "2023-02-01", value: 4.2 },
      { date: "2023-03-01", value: 4.4 },
      { date: "2023-04-01", value: 4.6 },
      { date: "2023-05-01", value: 4.8 },
      { date: "2023-06-01", value: 5 },
    ]
  }
  // console.log(data);
  return c.json(data);
  })
  
  export default app
  