import React, { Component } from 'react'

export class Test2 extends Component {
    state ={
        
        value1 : ''
        
    }
   
    change =(event) =>{
        
        this.setState({
            value1: event.target.value,
          
        })
    }
    afiicher =() => {
alert(this.state.value1)
    }

    render() {
        return (
            <div>
                
               
                <input type="text" value={this.state.value1} onChange={this.change}/>
                <input type="submit"onClick={this.afiicher} />
            
                <p> {this.state.value1} </p>
            </div>
        )
    }
}

export default Test2
