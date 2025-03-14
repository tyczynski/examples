import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import { UseEffectEventExample } from "./examples/UseEffectEventExample"
import { UseEffectExample } from "./examples/UseEffectExample"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffectEventExample />
    {/* <UseEffectExample /> */}
  </StrictMode>,
)
