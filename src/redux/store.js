

import { createStore } from "redux";
import { todoReduser } from "./todo/todoReduser";

export const store =createStore(todoReduser)