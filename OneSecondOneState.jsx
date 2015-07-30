/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 */
var OneSecondOneState = React.createClass({
  /**
   * @returns {Object}
   */
  getInitialState() {
    return {
      lastState: null,
      values: []
    };
  },

  componentDidMount() {
    /* @var {String[]} states */
    var states = [
      'Rondônia',
      'Acre',
      'Amazonas',
      'Roraima',
      'Pará',
      'Amapá',
      'Tocantins',
      'Maranhão',
      'Piauí',
      'Paraíba',
      'Pernambuco',
      'Ceará',
      'Alagoas',
      'Sergipe'
    ];

    var interval = setInterval(
      function() {
        if (! states.length) {
          clearInterval(interval);

          return null;
        }

        var state = states.shift();

        this.setState({
          lastState: state,
          values: this.state.values.concat(state)
        });
      }.bind(this),
      1500
    );
  },

  render() {
    return (
      <div>
        <h4>{this.state.lastState}</h4>
        <TrieVisualGraph
          width={1000}
          trie={computeTrie(this.state.values)} />
      </div>
    )
  }
});
