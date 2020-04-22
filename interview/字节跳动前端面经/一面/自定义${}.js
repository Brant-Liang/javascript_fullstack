const year = '2017';
const month = '09';
const day = '21';
const str = render("${year}-${month}-${day}")({year, month,day});
function render(str) {
  return function(params) {
    for(let i in params) {
      str = str.replace(new RegExp('\\${' + i + '\\}', "g"), params[i])
    }
    console.log(str);
  }
}