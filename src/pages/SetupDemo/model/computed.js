export function books(newVal) {
  return newVal.map(v => {
    v._publishTimeLabel = new Date(v.publishTime).toLocaleString();
    return v;
  });
}
