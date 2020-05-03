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


// function cartoon(name='Pikachu',show='Pokemon') {
// 	//return <h1>Cartoon name is {name} and its show is {show}</h1>         //react la oru return statement la oru html tag dhan irukanum apdi illana error varumadhukaga dhan div tag use pandrom
// 	return <div>
// 				<h1>Cartoon name is {name} and its show is {show}</h1>
// 				<h2>Hello Everyone</h2>
// 			</div>
// }

// ReactDom.render(
// 	cartoon('Jasmine','Alladin'),
// 	document.getElementById('root')
// );


//CLOCK 

// setInterval(function(){
// 	ReactDom.render(
// 		<h2>Time Now :- {new Date().toLocaleTimeString()}</h2>,
// 		document.getElementById('root')
// 	);
// },1000);		// 1000 is for milliseconds


//COMPONENTS AND PROPS

//using function

// function Cartoon(props){
// 	return <h1>Hello, {props.name}</h1>
// }

//using class
// class Cartoon extends React.Component{
// 	render(){
// 		return <h1>Hello, {this.props.name}</h1>
// 	}
// }


// STATE AND LIFECYCLES

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date : new Date()
		}
	}

componentDidMount(){
	this.timer = setInterval( () => this.start(),1000 );
}

componentWillUnmount(){
	clearInterval(this.timer);
}

start(){
	this.setState({
		date: new Date()
	});
}

render(){
	return <h1> Time is: {this.state.date.toLocaleTimeString()}</h1>
}
}

//function time(){
	ReactDom.render(
		<Clock/>,
		document.getElementById('root')
	);
