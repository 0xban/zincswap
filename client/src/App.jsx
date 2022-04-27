import { Navbar, Welcome, Form } from './components';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
            <Form />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App;
