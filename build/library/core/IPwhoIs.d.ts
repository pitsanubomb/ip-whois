import { Axios } from 'axios';
/**
 * IPWhoIs class for IPWhoIs API
 *@class IPWhoIs
 * @description IPWhoIs class for IPWhoIs API
 * Uses Axios to make requests wrapper for IPWhoIs API form https://ipwhois.io/
 */
declare class IPWhoIs extends Axios {
    private _IP;
    constructor(ipAddress: string);
    /**
     * @method lookUp
     * @description lookUp method for IPWhoIs API
     * @returns {Promise<any>} Promise with the response from the API
     */
    lookUp(): Promise<any>;
}
export default IPWhoIs;
