import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FighterList from "./components/FighterList";
import Champion from "./components/Champion";
import Top5 from "./components/Top5";

class App extends Component {
  constructor() {
    super();
    this.state = {
      roster: [],
      name: "",
      record: "",
      img: "",
      rank: "",
      editID: null
    };
  }

  componentDidMount() {
    axios.get(`/api/fighterlist`).then(res => {
      this.setState({ roster: res.data });
      console.log(res.data);
    });
  }

  addFighter() {
    const newFighter = {
      name: this.state.name,
      record: this.state.record,
      img: this.state.img
    };
    axios.post(`/api/fighterlist`, { newFighter }).then(res => {
      this.setState({ roster: res.data });
    });
  }

  updatedFighter() {
    const updatedFighter = {
      name: this.state.name,
      record: this.state.record,
      img: this.state.img,
      rank: this.state.rank
    };
    axios
      .put(`/api/fighterlist/${this.state.editID}`, { updatedFighter })
      .then(res => {
        this.setState({ roster: res.data });
      });
  }

  deleteFighter() {
   
    
    axios
      .delete(`/api/fighterlist/${this.state.editID}`)
      .then(res => {
        this.setState({ roster: res.data });
      });
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  render() {
    return (
      <div className="body">
        <div className="Header">UFC Lightweight Divison Roster </div>
        <div className="App">
          <div>
            <button
              className="button"
              onClick={() => this.addFighter()}
              value={this.state.roster}
            >
              Add Fighter
            </button>
            <input
              placeholder="name"
              onChange={e => this.handleChange(e, "name")}
            />
            <input
              placeholder="record"
              onChange={e => this.handleChange(e, "record")}
            />
            <input
              placeholder="img"
              onChange={e => this.handleChange(e, "img")}
            />
            <input
              placeholder="rank"
              onChange={e => this.handleChange(e, "rank")}
            />
            <button className="button2" onClick={e => this.updatedFighter()}>
              Edit Fighter
            </button>
            <input
              placeholder="fighter id"
              onChange={e => this.handleChange(e, "editID")}
            />

            <button className="button3" onClick={e => this.deleteFighter()}>Delete</button>
          </div>
          <FighterList roster={this.state.roster} />
          <Top5 roster={this.state.roster} />
          <Champion roster={this.state.roster} />
        </div>
      </div>
    );
  }
}

export default App;
