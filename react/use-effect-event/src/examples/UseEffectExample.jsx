import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

import { Layout } from '../ui/Layout';

export function UseEffectExample() {
  const [count, setCount] = useState(0)
  const [intervalValue, setIntervalValue] = useState(2000)
  
  useEffect(() => {
    toast('Updated effect');

    const intervalId = setInterval(() => {
      toast(`Count: ${count}, Interval: ${intervalValue / 1000}s`);
    }, intervalValue)

    return () => clearInterval(intervalId)
  }, [intervalValue, count])

  return (
    <Layout title="useEffect">
      <button style={{marginBottom: 8 }} onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <br />

      <div>
        Interval: 
        {[1000, 2000, 3000].map((value) => (
          <span key={value}>
            <input type="radio" name="interval" value={value} checked={intervalValue === value} onChange={() => setIntervalValue(value)} />
            <label>{value / 1000}s</label>
          </span>
        ))}
      </div>
    </Layout>
  )
}
