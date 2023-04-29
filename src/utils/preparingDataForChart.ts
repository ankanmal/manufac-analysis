import WineData from "../constant/WineData.json";

const minMagnesiumByCategory: { [category: number]: number } = {};

for (const datum of WineData) {
  const { Alcohol, Magnesium } = datum;
  if (
    !minMagnesiumByCategory[Alcohol] ||
    Magnesium < minMagnesiumByCategory[Alcohol]
  ) {
    minMagnesiumByCategory[Alcohol] = Magnesium;
  }
}

export const minMagnesiumArray = Object.entries(minMagnesiumByCategory).map(
  ([category, magnesium]) => ({
    Alcohol: Number(category),
    Magnesium: magnesium,
  })
);
