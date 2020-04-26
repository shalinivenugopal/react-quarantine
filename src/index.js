import React from 'react'
import ReactDom from 'react-dom'

// let name = 'Kamini'
// let obj = {
// 	fname:'Shalini',
// 	lname:'Venugopal'
// }
// const element = <h1>Welcome {name}</h1> 
// ReactDom.render(
// 	//element,
// 	<h1>{obj.fname} {obj.lname}</h1>,
// 	document.getElementById('root')
// );


function cartoon(name='Pikachu',show='Pokemon') {
	//return <h1>Cartoon name is {name} and its show is {show}</h1>         //react la oru return statement la oru html tag dhan irukanum apdi illana error varumadhukaga dhan div tag use pandrom
	return <div>
				<h1>Cartoon name is {name} and its show is {show}</h1>
				<h2>Hello Everyone</h2>
			</div>
}

ReactDom.render(
	cartoon('Jasmine','Alladin'),
	document.getElementById('root')
);