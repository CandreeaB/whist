import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    addPlayers: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      players: 0
    }
  }


  handleChange = (e) => {
    this.setState({
      players: e.target.value,
    })
  }

  handlePlayers = () => {
    this.props.addPlayers(this.state.players)
  }

  render () {
    return (
      <div>
        <h3>Whist Table</h3>
        <div className='header-container'>Number of player:
          <input value={this.state.players} type='number' onChange={this.handleChange} />
          <button onClick={this.handlePlayers}>ok</button>
      </div>
      </div>
    )
  }
}
