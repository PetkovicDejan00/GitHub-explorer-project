import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import {ReactQueryDevtools} from 'react-query/devtools'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {BrowserRouter} from 'react-router-dom'
import { DataProvider } from './context/DataContext'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DataProvider>
          <App />
        </DataProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialOpen={false} position="bottom-right" />
    </QueryClientProvider>

  </React.StrictMode>
)
