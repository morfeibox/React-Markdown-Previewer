"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      markdownvalue: ""
    };
    return _this;
  }

  App.prototype.onHandleChange = function onHandleChange(event) {
    this.setState({
      markdownvalue: event.target.value
    });
  };

  App.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      "div",
      { className: "row text-center" },
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
          "h1",
          null,
          "Markdown"
        ),
        React.createElement("textarea", { onChange: function onChange(event) {
            return _this2.onHandleChange(event);
          }, value: this.state.markdownvalue, rows: "15", style: { width: "400" } })
      ),
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
          "h1",
          null,
          "Previewer"
        ),
        React.createElement("hr", null),
        React.createElement(
          "div",
          null,
          React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(this.state.markdownvalue) } })
        )
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), window.document.getElementById('app'));