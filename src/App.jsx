import './App.css'

function App() {

  return (
    <div> 
      <header>
       <img className="logo" src="./public/images/Logo Black.png" alt="logo" />
      <nav>
        <ul className="nav__links">
          <li><a href="#">[// home]</a></li>
          <li><a href="#">[// expertise]</a></li>
          <li><a href="#">[// work]</a></li>
          <li><a href="#">[// experience]</a></li>
          <li><a href="#">[// contact]</a></li>
        </ul>
      </nav>
    </header>
    <div className='grid-container'>
        <h1 className="hello">Hello I'm Olive Ann Ferrer
          <p>Im' a Web Developer based in the Philippines.</p>
        </h1>
        <img className="img" src="./public/images/beauty.png" alt="" />
        <button className="button">Let's Get Started</button>
      </div>
    </div>
  );
};

export default App;
