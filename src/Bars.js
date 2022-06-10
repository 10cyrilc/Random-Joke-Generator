import logo from './logo.png';
import './index.css'

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
}

function Foot(){
  return(
    <footer>
      <div className='footer'>
        <p>© Cyril C Thomas</p>
      </div>
    </footer>
  )
}

export {Nav, Foot};