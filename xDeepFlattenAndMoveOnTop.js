"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xDeepFlattenAndMoveOnTop = void 0;
var x_deep_array_traversal_1 = require("x-deep-array-traversal");
var x_deep_object_equal_1 = require("x-deep-object-equal");
/**
 * Flattens a deep array, moving all occurrences of the specified element to the beginning.
 *
 * @param {DeepArray} deepArray - The deep array to flatten and modify.
 * @param {DeepElement} [specificElement='xxx'] - The element to move to the beginning.
 * @returns {DeepArray} The modified deep array with the expected element moved to the start.
 */
var xDeepFlattenAndMoveOnTop = function (deepArray, specificElement) {
    if (specificElement === void 0) { specificElement = 'xxx'; }
    var expectedArray = [];
    (0, x_deep_array_traversal_1.xDeepArrayTraversal)(deepArray, function (element) {
        if ((0, x_deep_object_equal_1.xDeepObjectEqual)(element, specificElement)) {
            expectedArray.unshift(element);
        }
        else {
            expectedArray.push(element);
        }
    });
    return expectedArray;
};
exports.xDeepFlattenAndMoveOnTop = xDeepFlattenAndMoveOnTop;
