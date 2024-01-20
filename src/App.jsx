import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import User from './components/User'

function App() {
  return(
    <>
      <h1>Paragraph Generater</h1>
      <RecoilRoot>
        <User />
      </RecoilRoot>
      <footer>
        <p>&copy; 2024 Lorem Ipsum Generator. All rights reserved.</p>
      </footer>
    </>
  )
}
export default App
