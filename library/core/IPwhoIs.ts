import {Axios, AxiosResponse} from 'axios';
import {WHO_IS_API_URL} from '../config/global';

/**
 * IPWhoIs class for IPWhoIs API
 *@class IPWhoIs
 * @description IPWhoIs class for IPWhoIs API
 * Uses Axios to make requests wrapper for IPWhoIs API form https://ipwhois.io/
 */
class IPWhoIs extends Axios {
  private _IP: string;

  constructor(ipAddress: string) {
    super({
      baseURL: WHO_IS_API_URL,
    });
    this._IP = ipAddress;
  }

  /**
   * @method lookUp
   * @description lookUp method for IPWhoIs API
   * @returns {Promise<any>} Promise with the response from the API
   */
  async lookUp(): Promise<AxiosResponse<any>> {
    try {
      const response = await this.get(`${this._IP}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default IPWhoIs;
