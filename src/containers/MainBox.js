import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    clickedIcon: "profile"
  }

  changeClickedIcon = (event) => {
    this.setState({
      clickedIcon: event.target.id
    })
  }

  render() {
    let detailsToDisplay = <Profile />;

    switch (this.state.clickedIcon) {
      case "profile":
        detailsToDisplay = <Profile />;
        break;
      case "photo":
        detailsToDisplay = <Photos />;
        break;
      case "cocktal":
        detailsToDisplay = <Cocktails />;
        break;
      case "pokemon":
        detailsToDisplay = <Pokemon />;
        break;
    }
    
    return (
      <div>
        <MenuBar changeClickedIcon={this.changeClickedIcon}/>
        {detailsToDisplay}
      </div>
    )
  }
  
}

export default MainBox

/*

Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

*/