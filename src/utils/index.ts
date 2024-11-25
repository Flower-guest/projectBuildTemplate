/*
  获取静态图片
*/
export const getAssets = (url: string) => {
  return new URL(`../assets/img/${url}`, import.meta.url).href;
}
