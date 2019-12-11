import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
 const menuIcons = ["profile", "photo", "cocktail", "pokemon"]
  const classOfIcons = {
    "profile": "user",
    "photo": "photo",
    "cocktail": "cocktail",
    "pokemon": "themeisle"
  }
  const handleClick = (event) => {
    console.log(event.target.id)
    props.changeActiveMenu(event.target.id)

  }

  return (
    <div className="ui four item menu">
      {menuIcons.map((icon) => {
        return (<a onClick={handleClick} className={icon === props.activeMenu ? "item active" : "item"} id={icon} key={icon}>
          <i className={`${classOfIcons[icon]} large icon`} id={icon}/>
        </a>
      )})}

      {/* <a onClick={handleClick} className="item active" id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={handleClick} className="item" id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={handleClick} className="item" id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={handleClick} className="item" id="pokemon"> 
        <i className="themeisle large icon" id="pokemon"/>
      </a> */}
    </div>
  )

}

export default MenuBar
