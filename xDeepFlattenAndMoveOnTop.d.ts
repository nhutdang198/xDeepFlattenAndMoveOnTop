declare module 'x-deep-flatten-and-move-on-top' {
  type DeepArray = (number | string | DeepArray)[];
  type DeepElement = (object | number | string)
  /**
   * Flattens a deep array, moving all occurrences of the specified element to the beginning.
   *
   * @param {DeepArray} deepArray - The deep array to flatten and modify.
   * @param {DeepElement} [specificElement='xxx'] - The element to move to the beginning.
   * @returns {DeepArray} The modified deep array with the expected element moved to the start.
   */

  export function xDeepFlatenAndMoveOnTop(
    deepArray: DeepArray,
    specificElement?: DeepElement
  ): DeepArray;
}
