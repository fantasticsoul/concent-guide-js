import React, { Component } from "react";
import { register } from "concent";
import { setup, iState } from "./FnDemo";
import View from "./View";

class ClazzDemo extends Component {
  state = iState();
  render() {
    console.log(
      "%c SetupDemoClazzComp " + this.ctx.ccUniqueKey,
      "color:green;"
    );
    const {
      // state: { books, loading }
      state: { loading },
      moduleComputed: { books },
      settings: { getBooks }
    } = this.ctx;
    const renderBy = this.props.renderBy;

    return <View {...{ loading, books, getBooks, renderBy }} />;
  }
}

export default register({
  module: "SetupDemo",
  setup
})(ClazzDemo);
