import React from 'react'
import { Link } from 'react-router-dom'

const MenuHeader = () => {
	return (
		<section className="top-menu">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Aarmin Van Buuren">Aarmin Van Buuren</Link>
					</li>
					<li>
						<Link to="/Jimi Hendrix">Jimi Hendrix</Link>
					</li>
					<li>
						<Link to="/Outkast">Outkast</Link>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default MenuHeader
