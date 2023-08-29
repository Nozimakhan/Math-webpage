import './Route.scss'
import { Link } from 'react-router-dom'

const All = () => {
  return (
    <div className='question__wrapper'>
      <div className="question__card">
          <p>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem deleniti repellendus laudantium sint. Quasi omnis dolore cumque magni repudiandae.</p>
          <div className="answer">
            <Link>A: See Answer</Link>
            <p>#Algebra</p>
          </div>
      </div>

      <div className="question__card">
          <p>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem deleniti repellendus laudantium sint. Quasi omnis dolore cumque magni repudiandae.</p>
          <div className="answer">
            <Link>A: See Answer</Link>
            <p>#Algebra</p>
          </div>
      </div>

      <div className="question__card">
          <p>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem deleniti repellendus laudantium sint. Quasi omnis dolore cumque magni repudiandae.</p>
          <div className="answer">
            <Link>A: See Answer</Link>
            <p>#Algebra</p>
          </div>
      </div>

      <div className="question__card">
          <p>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem deleniti repellendus laudantium sint. Quasi omnis dolore cumque magni repudiandae.</p>
          <div className="answer">
            <Link>A: See Answer</Link>
            <p>#Algebra</p>
          </div>
      </div>
    </div>
  )
}

export default All