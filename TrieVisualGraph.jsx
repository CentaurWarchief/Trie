/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 */
var DEFAULT_MARGIN = 100;
var HALF_MARGIN    = DEFAULT_MARGIN / 2

var TrieVisualGraph = React.createClass({
  /**
   * @type {Object}
   */
  propTypes: {
    trie: React.PropTypes.object.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  /**
   * @returns {Object}
   */
  getDefaultProps() {
    return {
      width: 600,
      height: 600
    };
  },

  render() {
    var tree  = d3.layout.tree().size([
      this.props.width - DEFAULT_MARGIN,
      this.props.height - DEFAULT_MARGIN - ((DEFAULT_MARGIN * 2) - HALF_MARGIN)
    ]);

    /* @var {Object[]} nodes */
    var nodes = tree.nodes(computeD3Tree(this.props.trie));

    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        viewBox={sprintf('-%s -%s %s %s', HALF_MARGIN, HALF_MARGIN, this.props.width, this.props.height)}>
        <g>
          {tree.links(nodes).map(function(link) {
            return (
              <line
                x1={link.source.x}
                y1={link.source.y}
                x2={link.target.x}
                y2={link.target.y}
                style={{
                  stroke: '#34495e',
                  strokeWidth: 1.25
                }} />
            );
          })}
        </g>
        {nodes.map(function(node) {
          return (
            <g
              transform={sprintf('translate(%s, %s)', node.x, node.y)}
              className="node">
              <circle r={15} fill="#bdc3c7" stroke="#7f8c8d" strokeWidth={1.5} />
              <text
                dy={5}
                textAnchor="middle">
                <tspan>{node.name}</tspan>
              </text>
            </g>
          );
        })}
      </svg>
    );
  }
});
