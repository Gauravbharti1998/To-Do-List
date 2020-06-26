import React from 'react'
import ToDo from './toDo'
class Main extends React.Component{
    constructor()
    {
        super()
        this.state={
            data:'',
            notes:[],
          
        };
        this.addToNote=this.addToNote.bind(this)
    }
    changeIt(temp)
    {
        console.log(temp.target.data)
        this.setState({data:temp.target.value})
    }
    addToNote()
    {
        this.state.data = this.state.data.trim()
        if(this.state.data.length > 0)
            this.state.notes.push(this.state.data)
        this.setState({notes: this.state.notes, data: ''});
    }
    render()
    {
        return(
            <div>
                <h2>Enter the To Do items:-</h2>
                <textarea name="items" value={this.state.data} onChange={(e)=>this.changeIt(e)} rows="4" cols="50" placeholder="Enter here"></textarea><br/>
                <input type="button" class='button' onClick={this.addToNote} value="ADD"/>
                <h5>click on home to refresh</h5>
                <h1>TO DO ITEMS :- </h1>
                <ToDo notes={this.state.notes}/>
            </div>
        )
    }
}
export default Main