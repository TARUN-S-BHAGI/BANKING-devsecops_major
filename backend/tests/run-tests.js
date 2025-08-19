
import request from 'supertest'
import express from 'express'
const app = express()
app.get('/api/health', (_req,res)=>res.json({ok:true}))
;(async ()=>{ const res = await request(app).get('/api/health'); if(res.status===200 && res.body.ok){ console.log('tests ok'); process.exit(0);} console.error('tests failed'); process.exit(2); })();
