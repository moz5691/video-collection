import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

import {connect} from 'react-redux';



class Header extends Component{
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent = () => {
    console.log(this.props.auth.isSignedIn);
    switch (this.props.auth.isSignedIn){
      case null:
        return { title: 'undecided' }
      case true:
        return { title: 'Logout'}
      default:
        return { title: 'Login'}
    }
  }

  clickLogin = (e, {name}) => {
    this.setState({ activeItem: name });

  }
  render(){
    const { activeItem } = this.state;
    const renderContent = this.renderContent();
    console.log(renderContent);
    return (
      <Menu>
      <Menu.Item
        name='Home'
        as={Link}
        to={"/videos/search"}
        active={activeItem === 'Home'}
        onClick={this.handleItemClick}>
        Home
      </Menu.Item>

      <Menu.Item
        name='Player'
        as={Link}
        to={"/videos"}
        active={activeItem === 'Player'}
        onClick={this.handleItemClick}>
        Player
      </Menu.Item>

      <Menu.Item
        name='Edit'
        as={Link}
        to={"/videos/edit"}
        active={activeItem === 'Edit'}
        onClick={this.handleItemClick}>
        Add
      </Menu.Item>
      <Menu.Item
        name={renderContent.title}
        as={Link}
        to={"/"}
        active={activeItem === renderContent.title}
        onClick={this.handleItemClick}>
        {/*onClick={this.clickLogin}>*/}

      </Menu.Item>
  </Menu>
    );
  }

}

const mapStateToProps = (state)=> ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Header);