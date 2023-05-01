import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Logo from '../img/logo.png';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src={Logo} alt="" />
        <div className="user">
          <img src={Logo} alt="" />
          <div className="info">
            <span>Mario</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write/?edit=2`}></Link>
            <img src={Edit} alt="" />
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae
          necessitatibus officiis ullam, veritatis fugiat magni distinctio
          accusantium! Incidunt ullam amet veritatis impedit expedita
          perspiciatis nemo repellat esse accusantium iste. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Nostrum quo non tenetur nemo
          repellat, blanditiis consequuntur, excepturi eum voluptatibus aperiam
          optio. Aut neque accusantium, libero ea non tenetur debitis ut? Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Fuga rem culpa
          atque provident aut natus similique? Repellat optio omnis, accusantium
          minima ut blanditiis ea earum reprehenderit praesentium consequatur
          dolorem quaerat.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
