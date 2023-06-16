export const sortVps = (vps) => {
  return vps.map(el => {
    const arr = [];
    arr[0] = el.characters.find(item => item.name === 'vCPU') || null;
    arr[1] = el.characters.find(item => item.name === 'RAM') || null;
    arr[2] = el.characters.find(item => item.name === 'SSD') || null;

    el.characters = arr;

    return el;
  })
}