import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3000");
    const message = response.data.message;
    this.setState({
      message
    })
  }



  render() {
    return (
      <div className="App">
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;