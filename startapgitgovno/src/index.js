import React from 'react'
import {render} from 'react-dom'
import "./style.css"


function Header() {

	return(
		<div>

			<p className="headeroql">Dubina</p>

		</div>
	)
}
render(<Header/>, document.getElementById('root'))