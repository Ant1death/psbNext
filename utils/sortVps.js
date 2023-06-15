export const sortVps = (vps) => {
  return vps.map(el => {
    const arr = [];
    arr[0] = el.characters.find(item => item.name === 'vCPU');
    arr[1] = el.characters.find(item => item.name === 'RAM');
    arr[2] = el.characters.find(item => item.name === 'SSD');

    el.characters = arr;

    return el;
  })
}