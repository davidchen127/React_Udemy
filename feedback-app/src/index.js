import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM.render(
// <React.StrictMode>
//  <App />
// </React.StrictMode>
// , document.getElementById('root'))

createRoot(document.getElementById('root')).render(<App />)
