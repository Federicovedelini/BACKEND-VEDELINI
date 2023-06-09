import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'


import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()



app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
   res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,

   })
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)



export default app;

