import { Navbar, Welcome, Footer } from '../components/WelcomeComponents';


const WelcomePage = () => {
  return (
    <div className="WelcomePage">
          <div className="gradient-bg">
            <Navbar />
            <Welcome />
            <Footer />
          </div>
    </div>
  )
}

export default WelcomePage;
