
import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_req,res) => res.json({ok:true, ts: Date.now()}))
app.get('/api/balance', (_req,res) => res.json({account:'123456', balance: 12345.67}))

app.listen(process.env.PORT || 3000, ()=>console.log('API listening on', process.env.PORT || 3000))
