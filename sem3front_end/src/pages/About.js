import React, {Component} from "react"
import axios from 'axios'

async function fetchAboutData(obj) {
  	try {
  	  const aboutData = await axios('https://baconipsum.com/api/?type=meat-and-filler')
  	  // console.log(aboutData.data)
  	  obj.state.data = aboutData.data
  	} catch (e) {
     console.error(e)
    }
}

export default class About extends Component {

  constructor() {
    super();
	this.state = { data: [] }
	fetchAboutData(this)
	console.log(this.state.data)
  }

  render() {
    return <h1>About<ul>{this.state.data}</ul></h1>
  }
}