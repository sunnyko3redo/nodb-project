import React, { Component } from "react";
import axios from "axios";

export default class Champion extends Component {
  constructor() {
    super();
    this.state = { roster: [] };
  }

  

  render() {
    return (
      <div className="Champion">
        {this.props.roster
          .filter(el => {
            return +el.rank === 1;
          })
          .map(el => {
            return (
              <div key={el.id} className="one">
                <img src={el.img} />
                <div>
                  <h3>{el.name}</h3>
                  <h3> CHAMPION</h3>
                  <h3>Record {el.record}</h3>

                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
