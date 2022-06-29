export default (ids: string[]): [string, number] => {
  const idx = Math.floor(Math.random() * ids.length);
  const team = Math.round(Math.random());

  return [ids[idx], team];
};
