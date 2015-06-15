import React from "react";
import Bar from "offcourse-component-bar";
import Breadcrumbs from "offcourse-component-breadcrumbs";
import LevelButton from "offcourse-component-level-button";

class TopBar extends Bar {

  render() {
    let { setLevel, levels } = this.props;
    return (
      <section className={ this.classes() }>
        <Breadcrumbs setLevel={ setLevel.bind(this) }
          levels={ levels }/>
        <LevelButton setLevel={ setLevel.bind(this) }
          level={ { title: "Feedback", type: "feedback" } }
          current={ levels.current === "feedback" }/>
      </section>
    );
  }
}

TopBar.defaultProps = {
  location: "top"

};
TopBar.propTypes = {
  location: React.PropTypes.string,
  setLevel: React.PropTypes.func

};

export default TopBar;

/*eslint no-unused-vars:0 */
