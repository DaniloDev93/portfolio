import About from './components/About'
import Form from './components/Form'
import Header from './components/Header'
import './style/app.sass'

import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import qrcodegit from './assets/qrcode.png'

function App() {

  return (
    <div className="App">
      <div id="container-header">
        <Header />
      </div>

      <div id="container-about">
        <About/>
      </div>

      <div id="container-form">
        <Form />
      </div>

      <div id="container-footer">
        <a href="#container-header"><BsFillArrowUpCircleFill/></a>
        Home

        <div id="link_github">
          <img src={qrcodegit} alt="" srcset="" />
          <a href="http://https://github.com/DaniloDev93"><u>acesse o github</u></a>
        </div>

        <p>© 2023 <span>•</span> Design by Danilo Perdigão</p>
      </div>
    </div>
  )
}

export default App
