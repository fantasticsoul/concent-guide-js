import { run } from "concent";

run(
  {
    foo: {
      state: { i: new Date().getTime() }
    }
  },
  {
    isHot: true
  }
);
