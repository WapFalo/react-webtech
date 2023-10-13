import './Navigation.scss'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
      <header>
        <nav>
          <ol>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`mentions`}>Mentions légales</Link>
            </li>
            <li>
                <Link to={`details`}>Détails</Link>
            </li>
          </ol>
        </nav>
      </header>
    );
  }