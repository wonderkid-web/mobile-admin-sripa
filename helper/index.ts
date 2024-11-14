import { axiosAlquran, axiosPrayTime } from "@/libs/axios";
import { format } from "date-fns";

export const getTime = async () => {
  const latitude = 3.589718;
  const longitude = 98.645;
  const today = format(new Date(), "dd-MM-yyyy");

  const box = [];

  const {
    data: { data },
  } = await axiosPrayTime(
    `/timings/${today}?latitude=${latitude}&longitude=${longitude}`
  );

  for (const d in data.timings) {
    box.push({
      name: d,
      time: data.timings[d],
    });
  }

  return box;
};

export const getSurah = async () => {
  // const {data} = await axiosAlquran('/surah')
  // return data.data

  await sleep(500);

  return [
    {
      number: 1,
      name: "سُورَةُ ٱلْفَاتِحَةِ",
      englishName: "Al-Faatiha",
      englishNameTranslation: "The Opening",
      numberOfAyahs: 7,
      revelationType: "Meccan",
    },
    {
      number: 2,
      name: "سُورَةُ البَقَرَةِ",
      englishName: "Al-Baqara",
      englishNameTranslation: "The Cow",
      numberOfAyahs: 286,
      revelationType: "Medinan",
    },
    {
      number: 3,
      name: "سُورَةُ آلِ عِمۡرَانَ",
      englishName: "Aal-i-Imraan",
      englishNameTranslation: "The Family of Imraan",
      numberOfAyahs: 200,
      revelationType: "Medinan",
    },
    {
      number: 4,
      name: "سُورَةُ النِّسَاءِ",
      englishName: "An-Nisaa",
      englishNameTranslation: "The Women",
      numberOfAyahs: 176,
      revelationType: "Medinan",
    },
  ];
};

const sleep = async (time: number) =>
  new Promise((res) => setTimeout(res, time));
