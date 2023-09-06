// Import the xDeepFlattenAndMoveOnTop function
import { xDeepFlattenAndMoveOnTop } from './xDeepFlattenAndMoveOnTop.ts';

describe('xDeepFlattenAndMoveOnTop', () => {
  it('should move the expected element to the beginning', () => {
    const deepArray = [1, 'xxx', [2, 'xxx', 3, [4, 'xxx']]];
    const result = xDeepFlattenAndMoveOnTop(deepArray);

    expect(result).toEqual(['xxx', 'xxx', 'xxx', 1, 2, 3, 4]);
  });

  it('should handle an empty array', () => {
    const deepArray: any[] = [];
    const result = xDeepFlattenAndMoveOnTop(deepArray);

    expect(result).toEqual([]);
  });

  it('should handle an array with no matching element', () => {
    const deepArray = [1, 2, 3, 4];
    const result = xDeepFlattenAndMoveOnTop(deepArray);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle a nested array with no matching element', () => {
    const deepArray = [1, [2, [3]], 4];
    const result = xDeepFlattenAndMoveOnTop(deepArray);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle a deeply nested array with no matching element', () => {
    const deepArray = [1, [2, [3, [4, [5]]]], 6];
    const result = xDeepFlattenAndMoveOnTop(deepArray);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle a single-element array with the matching element', () => {
    const deepArray = ['xxx'];
    const result = xDeepFlattenAndMoveOnTop(deepArray);

    expect(result).toEqual(['xxx']);
  });

  it('should handle a single-element array without the matching element', () => {
    const deepArray = [1];
    const result = xDeepFlattenAndMoveOnTop(deepArray);

    expect(result).toEqual([1]);
  });

  it('should handle the expected element as a number', () => {
    const deepArray = [1, 2, [3, 4, [5, 6, [7]], 1]];
    const result = xDeepFlattenAndMoveOnTop(deepArray, 1);

    expect(result).toEqual([1, 1, 2, 3, 4, 5, 6, 7]);
  });
});
