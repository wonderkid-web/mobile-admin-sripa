export type SurahType = {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: "Meccan" | "Medinan";
  };


export type SurahTypeCallback = {
    item: SurahType[],
    index?: string
  }
  