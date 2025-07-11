import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeContextProvider, RightSidebarProvider, PortfolioTechnologiesProvider } from '@contexts'
import { store, persistor } from './store/store'
import './index.css'
import { TutorialsContextProvider } from '@contexts/TutorialsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContextProvider>
          <RightSidebarProvider>
            <PortfolioTechnologiesProvider>
              <TutorialsContextProvider>
              <BrowserRouter>
                <CssBaseline />
                <App />
              </BrowserRouter>
              </TutorialsContextProvider>
            </PortfolioTechnologiesProvider>
          </RightSidebarProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
) 