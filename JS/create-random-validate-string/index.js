const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const width = 200, height = 50;
ctx.width = width + "px";
ctx.height = height + "px";
canvas.addEventListener("click", () =>{
   ctx.clearRect(0, 0, width, height);
   drawLine();
   drawText();
})
drawLine();
function drawLine() {
   for (let i = 0; i < 6; i++) {
      let beginX = Math.random() * width;
      let beginY = Math.random() * height;
      let endX = Math.random() * width;
      let endY = Math.random() * height;
      ctx.beginPath();
      ctx.moveTo(beginX, beginY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      ctx.stroke();
   }
}
drawText();
function drawText() {
   var sourceText = ['a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'o', 'p',
      'q', 'r', 's', 't', 'u',
      'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E',
      'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'O', 'P',
      'Q', 'R', 'S', 'T', 'U',
      'V', 'W', 'X', 'Y', 'Z'];
   //选 4 个 不重复的
   let result = [];
   for (let i = 0; i < 4; i++) {
      const idx = parseInt(Math.random() * sourceText.length);
      result.push(sourceText[idx]);
      sourceText.splice(idx, 1);
   }
   for (let i = 0; i < result.length; i++) {
      //画字母
      ctx.font = '30px Helvetica';
      ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      ctx.textBaseline = ' middle';
      let preWidth = width / 4 - 10;
      ctx.fillText(result[i], Math.random() * preWidth + preWidth * i, height / 2);
   }
}

