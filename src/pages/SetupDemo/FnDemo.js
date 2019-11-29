import React from "react";
import "./model";
import { useConcent } from "concent";
import View from "./View";

export const setup = ctx => {
  const getBooks = () => ctx.dispatch("getBooks", ctx.state.reqDate);

  ctx.effect(getBooks, []);
  ctx.effect(() => {
    // alert(`mount ${ctx.ccUniqueKey}`);
    // return ()=> alert(`unmount ${ctx.ccUniqueKey}`);
  }, []);

  return {
    getBooks
  };
};

// private state
export const iState = () => ({
  startTime: 1,
  endTime: 2
});

export default React.memo(function(props) {
  const ctx = useConcent({
    module: "SetupDemo", state: iState(), setup, props
  });
  console.log("%c SetupDemoFnComp " + ctx.ccUniqueKey, "color:green;");
  const {
    // state: { books, loading }
    state: { loading },
    moduleComputed: { books },
    settings: { getBooks }
  } = ctx;
  const renderBy = ctx.props.renderBy;

  return <View {...{ loading, books, getBooks, renderBy }} />;
});
