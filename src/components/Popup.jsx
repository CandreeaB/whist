import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Popup extends Component {
  static propTypes = {
    key: PropTypes.number,
    addScore: PropTypes.func,
    closePopup: PropTypes.func,
  }
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            lost: 0
        };
    }

    handleSuccess = () => {
        this.setState ({
            done: true
        });
        this.handleAdd()
        this.props.closePopup()
    };

    handleFail = (e) => {
      this.setState ({
        lost: e.target.value
      });
    }

    handleAdd = () => {
      const player = 'Player'+ this.props.key
      {this.state.done ?  this.props.addScore(player, this.props.offer[player] + 5)
        :  this.props.addScore(player, this.props.offer[player] - this.state.lost)}

    };

    render() {
        return (
            <div className='popup'>
                <div>
                  {this.props.key}
                    <div>
                        <button onClick={() => this.handleSuccess()}>Made it!</button>
                    </div>
                  <div>
                    <input type="number" value={this.state.lost} onChange={(e) => this.handleFail(e)}/>
                    <button onClick={this.props.addScore}>Calculate score: </button>
                  </div>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}
