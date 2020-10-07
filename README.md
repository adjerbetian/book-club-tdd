# Problems for TDD

## Problem 1: decompose into primes

Decompose a number into prime factors.

### Signature

```ts
function decompose(n: number): number[];
```

### Examples

```ts
decompose(2) // [2]
decompose(12) // [2, 2, 3]
```

## Problem 2: the robot

Given:
- a map of width `w` and height `h`,
- a robot at a position `x`,`y` and orientation `d` of type `N`, `E`, `S` or `W` (north,east,south,west),
- and a list of instructions `i` of type `L`, `R` or `F` (left, right, forward)

give the last position of the robot in the format `x,y,d`.

### Signature

```ts
function getLastPosition(
    w: number, 
    h: number, 
    x: number, 
    y: number, 
    d: string,
    i: string[]
): string
```

### Example

```ts
getLastPosition(
    3, 3,
    1, 1, "N",
    ["F", "L", "F"]
)
// returns "0,2,W"
//
//  initial    -->       F       -->       L       -->       F
//  . . . .           . . . .           . . . .           . . . .
//  . . . .           . ^ . .           . < . .           < . . .
//  . ^ . .           . . . .           . . . .           . . . .
//  . . . .           . . . .           . . . .           . . . .
```

### Notes:
- a map of size 3,2 means 0 ≤ x ≤ 3 and 0 ≤ y ≤ 2
- the robot cannot get out of the map. If instructed to move outside the boundaries, the robot stays still.
