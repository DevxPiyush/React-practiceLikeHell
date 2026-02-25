import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ZODFORM from "./ZOD/ZODFORM.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <ZODFORM/>
  </StrictMode>,
)
