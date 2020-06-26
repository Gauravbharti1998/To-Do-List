import React from 'react'
class Header extends React.Component{
    render()
    {
        return(
        <div class="topnav">
            <a class="active" href="reload()">Reset</a>
            <h3 style={{color:'white',textAlign:'center',fontSize:'30px',fontFamily:'verdana'}}> TO DO LIST</h3>
        </div>
        )    
    }
}
export default Header