import "./Footer.scss"
import { Link } from "react-router-dom"

/*
Via le plugin : ES7+ React/Redux/React-Native snippets

rfce : permet de créer une fonction component
*/

function Footer() {
  return (
    <footer>
      <Link to={'mentions'}>Mentions légales</Link>
    </footer>
  )
}

export default Footer

            