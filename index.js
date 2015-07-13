'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentExpander = require('@economist/component-expander');

var _economistComponentExpander2 = _interopRequireDefault(_economistComponentExpander);

var StoryPreviews = (function (_React$Component) {
  function StoryPreviews() {
    _classCallCheck(this, StoryPreviews);

    _React$Component.apply(this, arguments);
  }

  _inherits(StoryPreviews, _React$Component);

  StoryPreviews.prototype.closeOthers = function closeOthers(currentExpander) {
    var _this = this;

    this.props.stories.map(function (story, i) {
      var expander = _this.refs['expander-' + i];
      if (expander !== currentExpander) {
        expander.close();
      }
    });
  };

  StoryPreviews.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      { className: 'StoryPreviews' },
      this.props.stories.map(function (story, i) {
        var header = _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('img', { src: story.image, className: 'Header--Image' }),
          _react2['default'].createElement(
            'h1',
            { className: 'Header--Speaker' },
            story.speaker
          ),
          _react2['default'].createElement(
            'h2',
            { className: 'Header--Title' },
            story.title
          )
        );
        var footer = _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'span',
            { className: 'closedLabel' },
            'Less'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'openLabel' },
            'More'
          )
        );
        return _react2['default'].createElement(
          _economistComponentExpander2['default'],
          { ref: 'expander-' + i, header: header, footer: footer, onOpen: _this2.closeOthers.bind(_this2) },
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: story.body } })
        );
      })
    );
  };

  _createClass(StoryPreviews, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        stories: _react2['default'].PropTypes.array
      };
    }
  }]);

  return StoryPreviews;
})(_react2['default'].Component);

exports['default'] = StoryPreviews;
module.exports = exports['default'];

