import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'

createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App />
    </StrictMode>
)

const initialData = [ 
  {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
  {id: 2, name: 'Самокат', price: 700, count: 1}, 
  {id: 3, name: 'Ролики', price: 1300, count: 2}, 
  {id: 4, name: 'Сноуборд', price: 19000, count: 4}
];

