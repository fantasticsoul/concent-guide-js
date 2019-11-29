import state from "./state";
import * as reducer from "./reducer";
import * as computed from "./computed";
import { configure } from "concent";

configure("SetupDemo", { state, reducer, computed });
