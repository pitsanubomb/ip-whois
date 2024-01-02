"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPwhoIs_1 = require("./core/IPwhoIs");
const whois = new IPwhoIs_1.default('8.8.4.4');
whois.lookUp().catch(error => console.info(error));
//# sourceMappingURL=index.js.map