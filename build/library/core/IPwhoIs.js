"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const global_1 = require("../config/global");
/**
 * IPWhoIs class for IPWhoIs API
 *@class IPWhoIs
 * @description IPWhoIs class for IPWhoIs API
 * Uses Axios to make requests wrapper for IPWhoIs API form https://ipwhois.io/
 */
class IPWhoIs extends axios_1.Axios {
    constructor(ipAddress) {
        super({
            headers: {
                'Content-Type': 'application/json',
            },
            baseURL: global_1.WHOIS_API_URL,
        });
        this._IP = ipAddress;
    }
    /**
     * @method lookUp
     * @description lookUp method for IPWhoIs API
     * @returns {Promise<any>} Promise with the response from the API
     */
    async lookUp() {
        try {
            const response = await this.get(`${this._IP}`);
            console.info(response.data);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = IPWhoIs;
//# sourceMappingURL=IPwhoIs.js.map