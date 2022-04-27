import { Navbar, Welcome, Form } from '../components';


const WelcomePage = () => {
  return (
    <div className="WelcomePage">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
            <Form />
          </div>
    </div>
  )
}

export default WelcomePage;
