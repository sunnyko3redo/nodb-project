import React, { Component } from "react";
import axios from "axios";

export default class Top5 extends Component {
  constructor() {
    super();
    this.state = { roster: [] };
  }


  

  render() {
    return (
      <div className="Top5">
        {this.props.roster
          .filter(el => {
            return +el.rank <= 5 && +el.rank !== 0;
          })
          .map(el => {
            return (
              <div className="one">
                <img src={el.img} />{" "}
                <div>
                  <h3>{el.name}</h3>
                  <h3>Rank #{el.rank}</h3>
                  <h3>Record {el.record}</h3>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
