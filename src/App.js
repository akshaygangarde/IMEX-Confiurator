import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(document.body.getElementsByClassName('col'))
    var col = document.body.getElementsByClassName('col');
    console.log("childnodes", col[0].children)
    col[0].removeChild(col[0].children[0]);
    console.log("childnodes", col[0].children)
  }

  render(){
    return (
      <div>
        
      </div>
    )
  }
}

export default App;
