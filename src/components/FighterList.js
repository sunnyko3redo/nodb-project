import React, { Component } from "react";
import axios from "axios";

export default class FighterList extends Component {
  constructor() {
    super();
    this.state = {roster:[]};
  }


  
  

  addFighter(newFighter) {
    axios.post(`/api/fighterlist`, { newFighter }).then(res => {
      this.setState({
        roster: res.data
      });
    });
  }


  updateFighter(updatedFighter){
      axios.put(`/api/fighterlist`, {updatedFighter}).then(res=>{
          this.setState({
              roster: res.data
          })
      })
  }


  render() {
    
    return (
      <div className="FighterList">
        {this.props.roster.map(el => {
            return (
                <div className="one">
                    <img src={el.img}/><div><h3>{el.name}</h3>
                    <h3>Record {el.record}</h3></div>
                    
                </div>
                
            )
        })}
      </div>
    );
  }
}
