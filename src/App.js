import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    background: "#F93800",
    borderRadius: 6,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,

      password: null,
      error: false,
    };
  }
  
  handleClick = (e) => {
    
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="wraps">

        <div className={"roots"} variant="outlined">
          
          <div className="loginemail">
            <TextField
              placeholder=""
              label="Province"
              name="Province"
              margin="normal"
            />
          </div>
          <div className="loginemail">
            <TextField
              placeholder=""
              label="City"
              name="City"
              margin="normal"
            />
          </div>
          <div className="loginemail">
            <TextField
              placeholder=""
              label="from"
              name="from"
              margin="normal"
            />
          </div>
          <div className="loginemail">
            <TextField
              placeholder=""
              label="to"
              name="to"
              margin="normal"
            />
          </div>
         

 
        </div>
      </div>
    );
  }
}
export default App;
