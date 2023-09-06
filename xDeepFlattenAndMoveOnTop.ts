import { xDeepArrayTraversal } from "x-deep-array-traversal"
import { xDeepObjectEqual } from "x-deep-object-equal"

type DeepArray = (object | number | string | DeepArray)[];
type DeepElement = (object | number | string)
/**
 * Flattens a deep array, moving all occurrences of the specified element to the beginning.
 *
 * @param {DeepArray} deepArray - The deep array to flatten and modify.
 * @param {DeepElement} [specificElement='xxx'] - The element to move to the beginning.
 * @returns {DeepArray} The modified deep array with the expected element moved to the start.
 */
export const xDeepFlattenAndMoveOnTop = (
  deepArray: DeepArray,
  specificElement: DeepElement = 'xxx'
): DeepArray => {
  const expectedArray: DeepArray = [];
  xDeepArrayTraversal(deepArray, (element) => {
    if (xDeepObjectEqual(element, specificElement)) {
      expectedArray.unshift(element)
    } else {
      expectedArray.push(element)
    }
  })
  return expectedArray;
};
