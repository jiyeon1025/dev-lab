import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [hello, setHello] = useState('');

  useEffect(()=>{
      axios('/api/hello')
        .then((res)=>{
            setHello(res.data);
        })
        .catch((err)=>console.log(err));
  })

  return (
    <div>
      백엔드에서 가져온 데이터 : {hello}
    </div>
  )
}

export default App
