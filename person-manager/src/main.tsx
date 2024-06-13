import ReactDOM from 'react-dom/client'
import App from './pages/app.tsx'
import './globals.css'

import { ContextProvider } from './provider/globalProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
