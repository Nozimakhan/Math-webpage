import './Route.scss';
import { Link } from 'react-router-dom';

const Arithmetic = () => {
  return (
    <div className='question__wrapper'>
      <div className="question__card">
        <p>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae exercitationem architecto consectetur consequuntur? Sit, reprehenderit.</p>
        <div className="answer">
          <Link>A: See Answer</Link>
          <p>#Algebra</p>
        </div>
      </div>
      <div className="question__card">
        <p>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae exercitationem architecto consectetur consequuntur? Sit, reprehenderit.</p>
        <div className="answer">
          <Link>A: See Answer</Link>
          <p>#Algebra</p>
        </div>
      </div>
      <div className="question__card">
        <p>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae exercitationem architecto consectetur consequuntur? Sit, reprehenderit.</p>
        <div className="answer">
          <Link>A: See Answer</Link>
          <p>#Algebra</p>
        </div>
      </div>
    </div>
  )
}

export default Arithmetic