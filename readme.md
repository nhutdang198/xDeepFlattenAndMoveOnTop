**xDeepFlattenAndMoveOnTop** is a utility function that flattens a deep array while moving all occurrences of a specified element to the beginning.

## Installation

To use xDeepFlattenAndMoveOnTop, you'll need to include the provided TypeScript file in your project.

1. Download the `xDeepFlattenAndMoveOnTop.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xDeepFlattenAndMoveOnTop` class into your TypeScript code:

   ```typescript
   import { xDeepFlattenAndMoveOnTop } from 'x-deep-flatten-and-move-on-top'

   const deepArray = [1, 2, [3, 4, [5, 6, [7]], 1]];
   const result = xDeepFlattenAndMoveOnTop(deepArray, 1);
   expect(result).toEqual([1, 1, 2, 3, 4, 5, 6, 7]);
   // pass

2. Import the `xDeepFlattenAndMoveOnTop` class into your Javascript code:

   ```javascript
   const { xDeepFlattenAndMoveOnTop } = require("x-deep-flatten-and-move-on-top")

   const deepArray = [1, 2, [3, 4, [5, 6, [7]], 1]];
   const result = xDeepFlattenAndMoveOnTop(deepArray, 1);
   expect(result).toEqual([1, 1, 2, 3, 4, 5, 6, 7]);
   // pass
   
## Support Me

If you find this project helpful or want to show your appreciation, you can support me by [buying me a coffee](https://www.buymeacoffee.com/nhutdm). Your support is greatly appreciated!
