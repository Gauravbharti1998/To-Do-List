import React from 'react'
class Footer extends React.Component{
    constructor()
    {
        super()
        this.state =  {time : new Date()}
        this.updateTime = this.updateTime.bind(this)
    }
    componentDidMount(){
        setInterval(this.updateTime,'1000')
    }
    updateTime()
    {
        this.setState({time:new Date()})
    }
    render()
    {
        let style={
            fontSize:'10 px',
            fontFamily: 'monospace',
            textAlign:'right',
            marginTop: '30%'
        }
        return(
            <div>
                <h3 id="clock">{this.state.time.getHours().toString().padStart(2,'0')}:{this.state.time.getMinutes().toString().padStart(2,'0')}:{this.state.time.getSeconds().toString().padStart(2,'0')}</h3>      
                <h1 style={style}>Made by Gaurav</h1>
            </div>
        ) 

    }
}
export default Footer