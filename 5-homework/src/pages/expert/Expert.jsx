import './Expert.scss';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Expert = () => {
  return (
    <div className='expert'>
      <div className="expert-question">
        <h1>Still have many questions?</h1>
        <button>Ask out live tutors</button>
      </div>
      <div className="container">
        <div className="category__wrapper">
          <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/expert/all"}>All</NavLink>
          <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/expert/arithmetic"}>Arithmetic</NavLink>
          <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/expert/algebra"}>Algebra</NavLink>
          <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/expert/geometry"}>Geometry</NavLink>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Expert