import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    currentOption: Profile,
    active: 'profile'
  }
  
  handleClick = (id) => {
    this.setState({
      ...this.state,
      active: id
    })
    if (id === 'photo') {
      this.setState({
        currentOption: Photos
      })
    } else if (id === 'profile') {
      this.setState({
        currentOption: Profile
      })
    } else if (id === 'cocktail') {
      this.setState({
        currentOption: Cocktails
      })
    } else {
      this.setState({
        currentOption: Pokemon
      })
    }
  }

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    Which component should have state? Which component should have methods to control state? 
    Where should these methods be called?

    */
    let detailsToDisplay = this.state.currentOption 
    return (
      <div>
        <MenuBar active={this.state.active} handleClick={this.handleClick} />
        {detailsToDisplay === Pokemon ? <Pokemon /> : detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
