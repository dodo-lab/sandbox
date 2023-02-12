type Colors = Record<string, string | readonly number[]>;

// ==================================================================================
// Type annotation
// ----------------------------------------------------------------------------------
const colorsWithType: Colors = {
  black: '#000000',
  red: '#ff0000',
  green: [0, 255, 0],
  blue: [0, 0, 255],
};

// 推論結果が残ってないため、blueWithTypeは string | number[] 型.
// また、`colorsWithType.`の時点で補間が効かない.
const blueWithType = colorsWithType.blue;

// ==================================================================================
// satisfies
// ----------------------------------------------------------------------------------
const colorsWithSatisfies = {
  black: '#000000',
  red: '#ff0000',
  green: [0, 255, 0],
  blue: [0, 0, 255],
} satisfies Colors;

// satisfiesにより推論結果が残っているため、blueWithSatisfiesは readonly number[] 型.
const blueWithSatisfies = colorsWithSatisfies.blue;

// ==================================================================================
// as const satisfies
// ----------------------------------------------------------------------------------
const colorsWithConstSatisfies = {
  black: '#000000',
  red: '#ff0000',
  green: [0, 255, 0],
  blue: [0, 0, 255],
} as const satisfies Colors;

// satisfiesにより推論結果が残しつつ、as constでWideningを防ぐため、blueWithSatisfiesは readonly [0, 0, 255] 型.
const blueWithConstSatisfies = colorsWithConstSatisfies.blue;
