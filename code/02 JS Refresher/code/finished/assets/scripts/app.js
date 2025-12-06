import {apiKey} from "./util.js";

import defaultImport from "./util.js";
console.log(apiKey);
console.log(defaultImport);

import * as utils from "./util.js";
console.log(utils); //js object
console.log(utils.apiKey); //js object field