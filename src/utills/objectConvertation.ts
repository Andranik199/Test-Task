import { extractIdFromUrl } from "./extractIdFromUrl";

export const objectConvertation = (res: any) => {
  return res.results.map((item: { url: any; films: any[] }) => ({
    ...item,
    id: extractIdFromUrl(item.url),
    image: `https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(
      item.url
    )}.jpg`,
  }));
};
