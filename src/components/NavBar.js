import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const NavBar = () => {
  return (
    <header className="bg-purple-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact 
          activeClassName="text-white"
          className="inflex-flex items-center py-6 px-3 mr-4 
          text-purple-100 hover:text-pink-800 text-4xl font-bold 
          cursive tracking-widest"
          >
            BeatzeCutze
          </NavLink>
          <NavLink to="/about" className="inline-flex items-center 
          py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-800"
          activeClassName="text-purple-100 bg-purple-700"
          >
            About Me!
          </NavLink>
          <NavLink to="/post" className="inline-flex items-center 
          py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-800"
          activeClassName="text-purple-100 bg-purple-700"
          >
            Blog
          </NavLink>
          <NavLink to="/project" className="inline-flex items-center 
          py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-800"
          activeClassName="text-purple-100 bg-purple-700"
          >
            Projekte
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://soundcloud.com/beatzecutze" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url="https://github.com/burns1910" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url="mailto:meow[at]beatzecutze[punkt]de" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  )
}

export default NavBar
