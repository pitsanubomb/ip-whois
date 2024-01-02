import IPWhoIs from './core/IPwhoIs';

export default IPWhoIs;

/**
 * @module IPwhoIs
 * @description library module for IPWhoIs API
 * @version 1.0.0
 * @see {@link https://ipwhois.io/}
 * @example
 */

const example = async () => {
  const ipwhois = new IPWhoIs('8.8.4.4');
  const res = await ipwhois.lookUp();
  console.log(res);
};
