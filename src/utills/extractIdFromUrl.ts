export const extractIdFromUrl = (url?: string): number => {
  const reg = new RegExp("\\d+(?=\\D*$)");
  // @ts-ignore
  return Number(url.match(reg)[0]);
};
