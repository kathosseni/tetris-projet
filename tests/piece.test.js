import { describe, expect, it } from 'vitest';
import { rotate } from '../src/core/piece.js';

describe('rotate', () => {
  it('fait pivoter une matrice 2x2 dans le sens horaire', () => {
    expect(rotate([
      [1, 2],
      [3, 4]
    ])).toEqual([
      [3, 1],
      [4, 2]
    ]);
  });

  it('fait pivoter une matrice 3x3 dans le sens horaire', () => {
    expect(rotate([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]);
  });

  it('lève une erreur pour une matrice non carrée', () => {
    expect(() => rotate([
      [1, 2, 3],
      [4, 5, 6]
    ])).toThrow(TypeError);
  });
});
