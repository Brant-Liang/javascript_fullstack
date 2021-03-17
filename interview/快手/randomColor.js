function random () {
  const str = '0123456789ABCDEF';
  let res = '#'
  for(let i = 0; i < 6; i++) {
    res += str[1 + Math.ceil(Math.random() * 15)]
  }
  console.log(res);
  return res;
}

random()

function hex2RGB (hex) {
  let color = hex.slice(1);
  let res = 'rgb('
  for(let i = 0; i < 3; i++) {
    if(i === 2) {
      res += parseInt(color.substring(i, i + 2), 16) + ')'
      
    } else {
      res += parseInt(color.substring(i, i + 2), 16) + ',';
    }
  }
  console.log(res)
}

hex2RGB('#E3A36')