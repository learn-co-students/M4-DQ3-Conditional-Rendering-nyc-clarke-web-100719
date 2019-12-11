import React from 'react'

const MenuBar = (props) => {

  return (
    <div className="ui four item menu">
      <a className={props.shade === "profile" ? "item active" : "item"} id="profile" onClick={props.changeClickedIcon}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={props.shade === "photo" ? "item active" : "item"} id="photo" onClick={props.changeClickedIcon}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={props.shade === "cocktail" ? "item active" : "item"} id="cocktail" onClick={props.changeClickedIcon}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={props.shade === "pokemon" ? "item active" : "item"} id="pokemon" onClick={props.changeClickedIcon}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )
  
}

export default MenuBar

/*

The 'a' tags below are the menu items. Think about the way a menu 
should work. When you click a menu item, the button typically becomes
'active' to indicate that it is currently selected. How could we achieve
this programatically? What other behavior do we expect when we click
on a menu item? Do we need state in this component, and if not, how can
this component be made aware of what is currently the active menu item?

*/