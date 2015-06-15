"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _offcourseComponentBar = require("offcourse-component-bar");

var _offcourseComponentBar2 = _interopRequireDefault(_offcourseComponentBar);

var _offcourseComponentBreadcrumbs = require("offcourse-component-breadcrumbs");

var _offcourseComponentBreadcrumbs2 = _interopRequireDefault(_offcourseComponentBreadcrumbs);

var _offcourseComponentLevelButton = require("offcourse-component-level-button");

var _offcourseComponentLevelButton2 = _interopRequireDefault(_offcourseComponentLevelButton);

var TopBar = (function (_Bar) {
  function TopBar() {
    _classCallCheck(this, TopBar);

    if (_Bar != null) {
      _Bar.apply(this, arguments);
    }
  }

  _inherits(TopBar, _Bar);

  _createClass(TopBar, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var setLevel = _props.setLevel;
      var levels = _props.levels;

      return _react2["default"].createElement(
        "section",
        { className: this.classes() },
        _react2["default"].createElement(_offcourseComponentBreadcrumbs2["default"], { setLevel: setLevel.bind(this),
          levels: levels }),
        _react2["default"].createElement(_offcourseComponentLevelButton2["default"], { setLevel: setLevel.bind(this),
          level: { title: "Feedback", type: "feedback" },
          current: levels.current === "feedback" })
      );
    }
  }]);

  return TopBar;
})(_offcourseComponentBar2["default"]);

TopBar.defaultProps = {
  location: "top"

};
TopBar.propTypes = {
  location: _react2["default"].PropTypes.string,
  setLevel: _react2["default"].PropTypes.func

};

exports["default"] = TopBar;

/*eslint no-unused-vars:0 */
module.exports = exports["default"];