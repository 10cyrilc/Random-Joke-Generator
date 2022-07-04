import '../index.css'

function Nav() {
  return (
    <nav className="navbar">
        <p className="navText">Random Joke Generator</p>
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