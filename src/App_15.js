import logo from './logo.svg';
import './App_15.scss';

function App_15() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className="menu-item">
          <img className="background-image" src="https://i.ibb.co/cvpntL1/hats.png" alt="" />
          <a href="./hats.html" className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="menu-item">
          <img className="background-image" src="https://i.ibb.co/px2tCc3/jackets.png" alt="" />
          <a href="./jackets.html" className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="menu-item">
          <img className="background-image" src="https://i.ibb.co/0jqHpnp/sneakers.png" alt="" />
          <a href="./sneakers.html" className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="large menu-item">
          <img className="background-image" src="https://i.ibb.co/GCCdy8t/womens.png" alt="" />
          <a href="./women.html" className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="large menu-item">
          <img className="background-image" src="https://i.ibb.co/R70vBrQ/men.png" alt="" />
          <a href="./mens.html" className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App_15;
