import React from "react";
import "./model";
import { registerHookComp } from "concent";
import FnDemo from "./FnDemo";
import ClassDemo from "./ClazzDemo";
import { Tabs } from "reactbulma";
import TabItem from "../../components/dumb/TabItem";

const makeTabActiveStatus = () => ({ clazz: false, fn: false });

const state = () => {
  const tab_isActive_ = makeTabActiveStatus();
  const activeTab = "fn";
  tab_isActive_[activeTab] = true;
  return { tab_isActive_, activeTab };
};

export const setup = ctx => {
  return {
    changeActiveTab: e => {
      const activeTab = e.currentTarget.dataset.tabName;
      const tab_isActive_ = makeTabActiveStatus();
      tab_isActive_[activeTab] = true;
      ctx.setState({ tab_isActive_, activeTab });
    }
  };
};

const render = ctx => {
  const { changeActiveTab } = ctx.settings;
  const { tab_isActive_, activeTab } = ctx.state;

  return (
    <>
      <Tabs toggle fullwidth>
        <ul>
          <TabItem
            isActive={tab_isActive_.fn}
            label="fn component"
            tabName="fn"
            onClick={changeActiveTab}
          />
          <TabItem
            isActive={tab_isActive_.class}
            label="class component"
            tabName="class"
            onClick={changeActiveTab}
          />
        </ul>
      </Tabs>
      {activeTab === "fn" ? (
        <FnDemo renderBy="fn" />
      ) : (
        <ClassDemo renderBy="class" />
      )}
    </>
  );
};

export default registerHookComp({
  state,
  setup,
  render
});

// return <View {...{ loading, books, getBooks }} />;
