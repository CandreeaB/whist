import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { addPlayers, playersName, scorePrediction, addScore } from '../actions'
import Header from './Header'
import connect from 'react-redux/es/connect/connect'
import Table from './Table'

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = dispatch => bindActionCreators({addPlayers, playersName, scorePrediction, addScore}, dispatch);

class GameApp extends Component {
  static propTypes = {
    offer: PropTypes.object,
    addPlayers: PropTypes.func,
    playersName: PropTypes.func,
    scorePrediction: PropTypes.func,
    addScore: PropTypes.func,
  }


  render () {
    return (
      <div>
        <Header addPlayers={ this.props.addPlayers } />
        {this.props.players < 3 || this.props.players > 6 ?
          'You need at least 3 players to play the game but no more than 6' :
          <Table
            players={ this.props.players }
            playersName={ this.props.playersName }
            offer={ this.props.offer}
            scorePrediction={this.props.scorePrediction}
            addScore={this.props.addScore}
          />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameApp);
