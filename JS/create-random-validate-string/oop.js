// 抽象
const width = 200, height = 50;
class Gcode {
   constructor(el) {
      this.$el = document.getElementById(el);
      this.ctx = this.$el.getContext('2d');
      this.$el.width = width;
      this.$el.height = height;
      this.drawLine();
      this.drawText();
      let that = this;
      this.$el.addEventListener('click', () => {
         this.ctx.clearRect(0, 0, width, height);
         this.drawLine();
         this.drawText();
      })
   }
   drawLine() {
      for (let i = 0; i < 6; i++) {
         let beginX = Math.random() * width;
         let beginY = Math.random() * height;
         let endX = Math.random() * width;
         let endY = Math.random() * height;
         this.ctx.beginPath();
         this.ctx.moveTo(beginX, beginY);
         this.ctx.lineTo(endX, endY);
         this.ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
         this.ctx.stroke();
      }
   }
   drawText() {
      var sourceText = ['a', 'b', 'c', 'd', 'e',
         'f', 'g', 'h', 'i', 'j',
         'k', 'l', 'm', 'o', 'p',
         'q', 'r', 's', 't', 'u',
         'v', 'w', 'x', 'y', 'z',
         'A', 'B', 'C', 'D', 'E',
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
         this.ctx.font = '30px Helvetica';
         this.ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
         this.ctx.textBaseline = ' middle';
         let preWidth = width / 4 - 10;
         this.ctx.fillText(result[i], Math.random() * preWidth + preWidth * i, height / 2);
      }
   }
}
// 生成实例
let obj = new Gcode('screen');
let obj1 = new Gcode('screen1');
let obj2 = new Gcode('screen2');