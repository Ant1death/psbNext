export const sortHostings = (hostings) => {
  return hostings.map(el => {
    const arr = [];
    arr[0] = el.characters.find(item => item.content === 'GB');
    arr[1] = el.characters.find(item => item.name === 'До');
    arr[2] = el.characters.find(item => item.name === 'Лицензия');
    arr[3] = el.characters.find(item => item.name === 'Защита');

    el.characters = arr;

    return el;
  })
}
