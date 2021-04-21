import React, { Component } from 'react'

export class Test extends Component {
    state ={
        num : 0
    }
    afficher = () =>{
        this.setState({
            num : this.state.num+1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.afficher} >ajouter</button>
                <p> {this.state.num} </p>
            </div>
        )
    }
}

export default Test
