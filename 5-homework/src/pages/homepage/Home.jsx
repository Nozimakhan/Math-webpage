import './Home.scss';
import background from '../../assets/images/bg2.png';

const Home = () => {
  return (
    <div className="home__bg">
      <div className='container'>
        <div className="home__container">
          
          <div className="home__context">
            <h1>Solving Any Math Problem</h1>
            <p>Solve math problems in a snap</p>
            <div className="appstore">
              <button>AppStore</button>
              <button>PlayMarket</button>
            </div>
          </div>

          <div className="home__img">
            <img src={background} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home