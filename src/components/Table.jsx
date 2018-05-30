import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Popup from './Popup'

export default class Table extends Component {
  static propTypes = {
    offer: PropTypes.object,
    players: PropTypes.array,
    playersName: PropTypes.func,
    scorePrediction: PropTypes.func,
    addScore: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      playerName: '',
      score: 0,
      showPopup: false,
      key: 0
    }
  }

  handleNames = ( e) => {
    this.setState({
      playerName: e.target.value,
    });
  };

  handleAdd = (key) => {
    let position
    if (key === 0) {
      position = 1
    }
    if (key === 2) {
      position = 2
    }
    if (key === 4) {
      position = 3
    }
    if (key === 6) {
      position = 4
    }
    if (key === 8) {
      position = 5
    }
    if (key === 10) {
      position = 6
    }
    this.props.playersName('Player' + position, this.state.playerName);
    this.setState({
      playerName: '',
    });
  };

  handleTable = () => {
    const players = this.props.players[0]
    const rows = this.props.players * 3 + 12
    const columns = this.props.players * 2 + 1
    const fillRange = (start, end) => {
      return new Array(end - start + 1).fill().map((item, index) => start + index);
    };
    let columnsArray = fillRange(0, columns - 1);
    let newArrayEight = [...Array(parseInt(players)).fill(8)]
    let newArrayOne = [...Array(parseInt(players)).fill(1)]

    const range = Array.from(Array(6), (_,x) => x + 2);
    const reverse = range.slice().reverse();

    const firstRow = newArrayEight.concat(reverse).concat(newArrayOne).concat(range).concat(newArrayEight);

    Array.matrix = function (rows, cols) {
      let arr = [];
      for (let i = 0; i < rows; ++i) {
        let columns = [];
        for (let j = 0; j < cols; ++j) {
          columns[j] = j;
        }
        arr[i] = columns;
      }
      return arr;
    };

    let gameTable = Array.matrix(rows, columns)

    return (
    <table className='table-container'>
      <thead>
      <tr>{columnsArray.map((key) =>
        <td key={key}>
          {key % 2 === 0 && key !== 0 ?
            <div id={key}>
                  <input className='name-holder'
                         value={this.state.playerName[key+20] }
                         key={key}
                         type='text'
                         onChange={(e) => this.handleNames(e)}/>
              <span onClick={() => this.handleAdd(key-2)}>👌</span>
                </div>
            : null}
        </td>
      )}
      </tr>
      </thead>
      <tbody>
      {gameTable.map((item, index) => {
        return <tr key={index}>
          {item.map((key) => {
            return <td key={key}>
              {key % 2 === 0 ?
                (key === 0 ? <span id={index}>{firstRow[index]}</span>

                  : null)
                : <div><input id={ key } type="number"
                         value={this.state.score[key]}
                         onChange={this.handleChange}
                         onBlur={() => this.handleScoreChange(this.state.score, key)} />
                  {/*<span onClick={() => this.verifyScore(key)}>✔</span>*/}
                </div>
              }
            </td>
            }
          )}
        </tr>
      })
      }
      </tbody>
    </table>
    )
  };

  handleChange = (e) => {
    this.setState ({
      score: e.target.value
    })
  }

  handleScoreChange = (score, key) => {
    let position
    if (key === 1) {
      position = 1
    }
    if (key === 3) {
      position = 2
    }
    if (key === 5) {
      position = 3
    }
    if (key === 7) {
      position = 4
    }
    if (key === 9) {
      position = 5
    }
    if (key === 11) {
      position = 6
    }
    this.props.scorePrediction('Player'+ position, parseInt(this.state.score))
    this.setState ({
      score: 0
    })
  }
  // verifyScore = (key) => {
  //   this.setState({
  //     showPopup: !this.state.showPopup,
  //     // key: position
  //   });
  // }

  render () {
    const table =this.handleTable()
    return (
      <div>
        {table}
        {/*{this.state.showPopup ?*/}
          {/*<Popup*/}
            {/*text='Close Me'*/}
            {/*closePopup={this.verifyScore}*/}
            {/*addScore={this.props.addScore}*/}
            {/*offer={ this.props.offer }*/}
            {/*key={this.state.key}*/}
          {/*/>*/}
          {/*: null*/}
        {/*}*/}
      </div>
    )
  }
}
