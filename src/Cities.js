/**
 * Cities - Class which contains uniq Cities
 * @class
 * @namespace
 */
export default class Cities {

  /**
   * Initialize cities list with empty list
   * @type {array}
   * @constructor
   */
  constructor() {
    this.collector = [];
  }

  /**
   * add - add new city to the set
   *
   * @param {string} word city name
   */
  add(word) {
    this.collector = [...new Set(this.collector.concat(word))].sort();
  }


  /**
   * get - Get city by index
   * @method
   *
   * @throws {Error} if index not found
   *
   * @param {number} index city index
   *
   * @return {string} city name
   */
  getCity(index) {
    if (this.collector[index] === undefined) throw new Error('index not found');
    return this.collector[index];
  }


  /**
   * get - get Cities
   *
   * @returns {array} - Cities list
   */
  get() {
    return this.collector;
  }

}
