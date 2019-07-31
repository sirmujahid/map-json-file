import React, { Component } from 'react'
import LocalJsonData from './localjson.json'

class Localjson extends Component {
 
  render() {
    return (
      <div>
        <h1>JSON Local Posts from Json file</h1>
        {LocalJsonData.map((postDetails, index)=>{
          return <div><h2> {postDetails.title} </h2> <p>{postDetails.body}</p> </div>
        })}
      </div>
    )
  }
}


export default Localjson
