
import React, {useEffect, useState} from 'react'
export default function App(){
  const [status, setStatus] = useState('loading...')
  useEffect(()=>{
    fetch('/api/health').then(r=>r.json()).then(d=>setStatus(JSON.stringify(d))).catch(()=>setStatus('backend unreachable'))
  },[])
  return (<div style={{fontFamily:'sans-serif',padding:20}}><h1>Banking Demo Frontend</h1><p>Backend health: {status}</p></div>)
}
