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
      Province:null,
      City:null,
      from:null,
      to:null,
      price:null,
      From:null,
      To:null,
      res:[]
    };
  }
  
  handleClick = (e) => {
    axios({
      method: "POST",
      url: "https://taxiroutes.herokuapp.com/routes/add",
      data: this.state,
    })
      .then((res) => {
        console.log("added");
      })
      .catch((e) => {
        console.log("error");
      });
  };
    handleGet= (e) => {
      const search={
        from:this.state.From,
        to:this.state.To
      }
    axios({
      method: "POST",
      url: "https://taxiroutes.herokuapp.com/routes/search",
      data: search,
    })
      .then((res) => {
        this.setState({ res: res.data });
      })
      .catch((e) => {
        console.log("error");
      });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const res= this.state.res;
    return (
      <div className="wraps">

           <div>
              <TextField
              placeholder=""
              label="Province"
              name="Province"
              margin="normal"
              onChange={this.handleChange}
            />
          
            <TextField
              placeholder=""
              label="City"
              name="City"
              margin="normal"
              onChange={this.handleChange}
            />
          
            <TextField
              placeholder=""
              label="from"
              name="from"
              margin="normal"
              onChange={this.handleChange}
            />
         
            <TextField
              placeholder=""
              label="to"
              name="to"
              margin="normal"
              onChange={this.handleChange}
            />
            <TextField
              placeholder=""
              label="Price"
              name="price"
              margin="normal"
              onChange={this.handleChange}
            />
            <StyledButton onClick={this.handleClick}>
              ADD
            </StyledButton>
            

           </div>
          <div>
           <TextField
              placeholder=""
              label="From"
              name="From"
              margin="normal"
              onChange={this.handleChange}
            />
         
            <TextField
              placeholder=""
              label="To"
              name="To"
              margin="normal"
              onChange={this.handleChange}
            />
            <StyledButton onClick={this.handleGet}>
              Search
            </StyledButton>
           </div>
           <div>
              {
             this.state.res.map((item,index)=>(

               <p >
                  Province: {item.Province} <br/>
                  City:{item.City} <br/>
                  From:{item.from} <br/>
                  To:{item.to} <br/>
                  Price:{item.price} <br/>
               </p>
               ))
           }
           </div>
 
      </div>
    );
  }
}
export default App;
