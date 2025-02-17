import React from 'react'
import { Header, Footer, Page } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Page>
        <Outlet />        
      </Page>
      <Footer />
    </>
  )
}

export default App