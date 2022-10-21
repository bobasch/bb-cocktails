export function uniqueByKey(arr: any[], key: string) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
