import React from 'react'
class ToDo extends React.Component
{
    constructor(props)
    {
        super(props)
        let crossStyles = Array(this.props.notes.length).fill(false)
        this.state={
            style: crossStyles
        }
    }
    changeStyle(index){
        this.setState((prevState) => {
            prevState.style[index] = !prevState.style[index]
            return {
                style: prevState.style
            }
        })
    }
    render()
    {
        let style={
            border:'1px dashed black',
            fontFamily:'consolas',
            fontSize:'20px',
        }
        const jsxNotes=this.props.notes.map((note, index) => {
            const styl = {
                textDecoration: (this.state.style[index])?'line-through':'none'
            }
            console.log(styl)
            return <li onClick={() => this.changeStyle(index)} style={styl}>{note}</li>
        })
        return(
            <ul class="container" style={style}>
                {jsxNotes}
            </ul>
        )
    }
}
export default ToDo