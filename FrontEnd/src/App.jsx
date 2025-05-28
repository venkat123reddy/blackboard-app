import './App.css'
import Body from './components/Body'
import Navigation from './navigation/Navigation'
import Sidebar from './sidebar/Sidebar'

function App() {
  return (
    <>
    <div className="landing">
     <div>
      <Sidebar>   
      </Sidebar>
     </div>
     <div className="bodys">
      <div>
        <Navigation>  
      </Navigation>
      </div>
      <div>
        <Body>
        </Body>
      </div>
        
     </div>

    </div>

    </>
  )
}

export default App
