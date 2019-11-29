import React, { Component } from "react";
import Message from "../dumb/Message";
import { register } from "concent";
import * as bizCst from "../../base/constant/biz";

const { PAGE_DEFAULT, PAGE_SETUP_DEMO } = bizCst;

const pathname_desc_ = {
  [PAGE_SETUP_DEMO]: {
    title: "now you are at setup-demo",
    content: (
      <>
        This case show you how to use setup in function component with
        useConcent api, and use setup in class component with register api, and
        what the awesome thing is you will find the class and function share the
        business logic code elegantly!!!
        <br />
        <span className="tag is-info is-light">
          <a href="https://codesandbox.io/s/concent-guide-xvcej">
            Here see source code
          </a>
        </span>
        <br />
        <span className="tag is-info is-light">
          <a href="https://github.com/concentjs/concent">More about Concent</a>
        </span>
      </>
    )
  }
};

const defaultPathname = window.location.pathname;

export default register()(
  class extends Component {
    state = { pathname: defaultPathname };

    $$setup(ctx) {
      ctx.aux("onUrlChanged", params => {
        const pathname = params.pathname;
        ctx.setState({ pathname });
      });
    }

    getDesc = () => {
      const { pathname } = this.state;
      let desc = pathname_desc_[pathname];
      if (!desc) {
        if (pathname !== "/") {
          desc = {
            title: `${pathname}`,
            content: "no desc for current pathname"
          };
        } else {
          desc = pathname_desc_[PAGE_SETUP_DEMO];
        }
      }
      return desc;
    };

    render() {
      const desc = this.getDesc();
      return <Message {...desc} />;
    }
  }
);
