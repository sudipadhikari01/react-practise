import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props){
	return <h1>{props.name} on {props.show}</h1>
}

function Show(){
	return <div>
				<Cartoon name='Pikachu' show='Pokemom'/>
				<Cartoon name='Avenger' show='cap'/> 

		</div>
}

ReactDOM.render(
	<Show/>,
	document.getElementById('root')
);