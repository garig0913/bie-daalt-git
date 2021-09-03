const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvas1 = document.getElementById("demoCanvas1");
const canvas2 = document.getElementById("demoCanvas2");
const canvas3 = document.getElementById("demoCanvas3");
const canvas4 = document.getElementById("demoCanvas4");
const canvas5 = document.getElementById("demoCanvas5");
const canvas6 = document.getElementById("demoCanvas6");
const canvas7 = document.getElementById("demoCanvas7");
const canvas8 = document.getElementById("demoCanvas8");
const bigDemo = document.getElementById("bigDemo");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");
const ctx4 = canvas4.getContext("2d");
const ctx5 = canvas5.getContext("2d");
const ctx6 = canvas6.getContext("2d");
const ctx7 = canvas7.getContext("2d");
const ctx8 = canvas8.getContext("2d");
const ctxBig = bigDemo.getContext("2d");

const modal = document.querySelector(".modal");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
modal.width = window.innerWidth;
modal.height = window.innerHeight;

const menu = document.querySelector(".menu-container");
const fillColor = document.querySelector(".fillColor");
const inputColor = document.querySelector("#fillColor");
const brushColor = document.querySelector("#brushColor");
const clear = document.querySelector(".trash");
const eraser = document.querySelector(".eraser");
const palette = document.querySelector("#palette");
const brush = document.querySelector(".paint");
const pencil = document.querySelector(".pencil");
const lineToTool = document.querySelector(".lineto");
const brushToolsCont = document.querySelector(".brushtools");
const canvasBtn = document.querySelector("#canvasBtn");
const canvasClr = document.querySelector("#canvasClr");
const colorSelector = document.querySelector(".colorSelector");
// const colorCubes = document.querySelectorAll('.colorCubes');
const slider = document.getElementById("slider");
const output = document.getElementById("range");
const lineSlider = document.querySelector("#lineSlider");
const lineRange = document.querySelector("#lineRange");
const rainbow = document.querySelector("#rainbow");
const shadow = document.querySelector(".shadow");
const star = document.querySelector(".star");
const circle = document.querySelector(".circle");
const hexagon = document.querySelector(".hex");
const rhombus = document.querySelector(".rhombus");
const tri = document.querySelector(".tri");
const six = document.querySelector(".six");
const chakram = document.querySelector(".chakram");
const spike = document.querySelector(".spike");
const x = document.querySelector(".x");
// const customShape = document.querySelector('.custom');
// const customShape2 = document.querySelector('.custom2');
output.innerHTML = `brush size: ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
   output.innerHTML = `brush size: ${this.value}`;
};

lineRange.innerHTML = `Line Width: ${lineSlider.value}`; // Display the default slider value
let linewidth = 1;
// Update the current slider value (each time you drag the slider handle)
lineSlider.oninput = function () {
   lineRange.innerHTML = `Line Width: ${this.value}`;
   linewidth = parseFloat(this.value / 2);
};

// let colorIsHidden = true;

canvasClr.addEventListener("click", () => {
   colorSelector.classList.toggle("hidden");
   // if (colorIsHidden === true) {
   //    colorIsHidden = false;
   // } else {
   //    colorIsHidden = true;
   // }
});

let eraserColor = "white";

colorSelector.addEventListener("click", (e) => {
   let color = e.target.classList[0];
   eraserColor = e.target.classList[1];
   canvas.classList.remove(...canvas.classList);
   canvas.classList.add(`${color}`);
   canvasClr.classList.remove(...canvasClr.classList);
   canvasClr.classList.add(`${color}`);
});

var val1;
var val2;

let paintTrue = false;

brush.addEventListener("click", () => {
   brushToolsCont.classList.toggle("hidden");

   if (brush.classList.contains("border-black")) {
      brush.classList.remove("border-black");
      brush.classList.add("border-blue-400");
   } else {
      brush.classList.add("border-black");
      brush.classList.remove("border-blue-400");
   }
});

pencil.addEventListener("click", () => {
   if (paintTrue === false) {
      paintTrue = true;
   } else {
      paintTrue = false;
   }

   brushToolsCont.classList.toggle("hidden");
});

// let lineToToolOn = false;

// lineToTool.addEventListener('click', () => {
//    paintTrue = false;
//    if (lineToToolOn === true) {
//       lineToToolOn = false;
//    } else {
//       lineToToolOn = true;
//    }
//    brushToolsCont.classList.toggle('hidden');
// });

// MENU HAAH / NEEH
x.addEventListener("click", () => {
   menu.classList.toggle("hidden");
});
// MENU HAAH / NEEH

// window.onkeypress = function (event) {
//    if (event.keyCode === 13) {
//       ctx.fillStyle = `${inputColor.value}`;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       inputColor.classList.toggle('hidden');
//       modal.classList.toggle('hidden');
//       inputColor.value = '';
//    }

// customShape.addEventListener('click', () => {
//    window.onkeypress = function (e) {
//       if (e.keyCode == 13) {
//          val1 = parseFloat(customShape.value);
//          customShape.value = '';
//          customShape2.value = '';
//       }
//    };
// });
// customShape2.addEventListener('click', () => {
//    window.onkeypress = function (e) {
//       if (e.keyCode == 13) {
//          val12 = parseFloat(customShape2.value);
//          customShape.value = '';
//          customShape2.value = '';
//       }
//    };
// });
let erase = false;

function eraserClass() {
   if (eraser.classList.contains("border-blue-400")) {
      eraser.classList.remove("border-blue-400");
   }
}

function brushClass() {
   if (brush.classList.contains("border-blue-400")) {
      brush.classList.remove("border-blue-400");
      brush.classList.add("border-black");
   }
}

star.addEventListener("click", () => {
   val1 = 0.5;
   val2 = 5;
   erase = false;
   paintTrue = false;
   eraserClass();
   brushClass();
});
circle.addEventListener("click", () => {
   val1 = 1;
   val2 = 20;
   erase = false;
   paintTrue = false;
   brushClass();
   eraserClass();
});
hexagon.addEventListener("click", () => {
   val1 = 1;
   val2 = 2.5;
   paintTrue = false;
   erase = false;
   brushClass();
   eraserClass();
});
rhombus.addEventListener("click", () => {
   val1 = 0.6;
   val2 = 2;
   paintTrue = false;
   erase = false;
   brushClass();
   eraserClass();
});
tri.addEventListener("click", () => {
   val1 = 0.5;
   val2 = 3;
   paintTrue = false;
   erase = false;
   brushClass();
   eraserClass();
});
six.addEventListener("click", () => {
   val1 = 0.5;
   val2 = 6;
   paintTrue = false;
   erase = false;
   brushClass();
   eraserClass();
});
chakram.addEventListener("click", () => {
   val1 = 0.5;
   val2 = 4;
   paintTrue = false;
   erase = false;
   brushClass();
   eraserClass();
});
spike.addEventListener("click", () => {
   val1 = 0.2;
   val2 = 9;
   paintTrue = false;
   erase = false;
   brushClass();
   eraserClass();
});

// stroke width, suuder, ongo
ctx.fillStyle = "red";
// ctx.lineWidth = 2;

let shadowOn = true;

function shadowOnFunc() {
   ctx.shadowOffsetX = 7;
   ctx.shadowOffsetY = 7;
   ctx.shadowBlur = 9;
   ctx.shadowColor = "black";
}
function shadowOffFunc() {
   ctx.shadowblur = 0;
}

function shadowButton() {
   shadow.addEventListener("click", () => {
      if (shadow.classList.contains("bg-green-400")) {
         shadow.classList.replace("bg-green-400", "bg-black");
      } else {
         shadow.classList.replace("bg-black", "bg-green-400");
      }
      if (shadowOn === false) {
         shadowOn = true;
      } else shadowOn = false;
   });
}

shadowButton();

let hue = 0;
let demoHue = 0;

// stroke width, suuder, ongo

let points = {
   x: undefined,
   y: undefined,
};

// zurj ehleh / duusah
let pause = true;
canvas.addEventListener("mousedown", () => {
   pause = false;
});
canvas.addEventListener("mouseup", () => {
   pause = true;
});
// zurj ehleh / duusah

// canvas fill
fillColor.addEventListener("click", () => {
   inputColor.classList.toggle("hidden");
   modal.classList.toggle("hidden");
   modal.addEventListener("click", () => {
      modal.classList.toggle("hidden");
      inputColor.classList.toggle("hidden");
   });

   window.onkeypress = function (event) {
      if (event.keyCode == 13) {
         ctx.fillStyle = `${inputColor.value}`;
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         inputColor.classList.toggle("hidden");
         modal.classList.toggle("hidden");
         inputColor.value = "";
      }
   };
});
// canvas fill

// brush ongo songoh
let color = "red";

palette.addEventListener("click", () => {
   brushColor.classList.toggle("hidden");
   modal.classList.toggle("hidden");
   modal.addEventListener("click", () => {
      modal.classList.toggle("hidden");
      brushColor.classList.toggle("hidden");
   });

   window.onkeypress = function (event) {
      if (event.keyCode == 13) {
         modal.classList.toggle("hidden");
         brushColor.classList.toggle("hidden");
         color = brushColor.value;
         brushColor.value = "";
         if (rainbow.classList.contains("on")) {
            rainbow.classList.remove("on");
         }
         if (rainbow.classList.contains("bg-green-400")) {
            rainbow.classList.add("bg-black");
            rainbow.classList.remove("bg-green-400");
         }
         demo();
      }
   };
});

rainbow.addEventListener("click", () => {
   var oldColor = color;
   rainbow.classList.toggle("on");
   if (rainbow.classList.contains("bg-black")) {
      rainbow.classList.add("bg-green-400");
      rainbow.classList.remove("bg-black");
   } else {
      rainbow.classList.add("bg-black");
      rainbow.classList.remove("bg-green-400");
   }
});
// brush ongo songoh

// clear canvas
clear.addEventListener("click", () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
});
// clear canvas

// canvasiin canvas har/tsagaan bolgoh

canvasBtn.addEventListener("click", () => {
   canvas.classList.toggle("bg-black");
   canvasBtn.classList.toggle("bg-white");
});
// canvasiin canvas har/tsagaan bolgoh

// mouseiin x y coordinate
canvas.addEventListener("mousemove", (e) => {
   points.x = e.x;
   points.y = e.y;
});
// mouseiin x y coordinate

// HELBER ZURAH FUNKTS
function drawShapes(context, x, y, outerRadius, inner, n, color) {
   if (rainbow.classList.contains("on")) {
      context.fillStyle = "hsl(" + hue + ",80%,50%)";
   } else {
      context.fillStyle = color;
   }
   context.beginPath();
   context.save();
   context.translate(x, y);
   context.moveTo(0, 0 - outerRadius);

   for (let i = 0; i < n; i++) {
      context.rotate(Math.PI / n);
      context.lineTo(0, 0 - outerRadius * inner);
      context.rotate(Math.PI / n);
      context.lineTo(0, 0 - outerRadius);
   }

   context.restore();
   context.closePath();
   context.stroke();
   context.fill();

   context.strokeStyle = "lightGray";
}
// HELBER ZURAH FUNKTS

// Eraser
eraser.addEventListener("click", () => {
   var prevcolor = color;
   eraser.classList.toggle("border-blue-400");
   if (erase === false) {
      erase = true;
      color = prevcolor;
   } else {
      erase = false;
      color = prevcolor;
   }
   brushClass();
   paintTrue = false;
});

function Eraser(x, y, radius) {
   ctx.fillStyle = `${eraserColor}`;
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, 6.28, false);
   ctx.closePath();
   ctx.fill();
}
// Eraser

function draw() {
   canvas.addEventListener("mousemove", (e) => {
      if (shadowOn === true) {
         shadowOnFunc();
      } else {
         shadowOffFunc();
      }
      ctx.lineWidth = linewidth;
      if (pause === false && erase === false && paintTrue === false) {
         hue += 2;
         drawShapes(
            ctx,
            e.x,
            e.y,
            slider.value,
            val1,
            val2,
            `${color}`,
            "black"
         );
      }
   });
   canvas.addEventListener("mousedown", (e) => {
      if (shadowOn === true) {
         shadowOnFunc();
      } else {
         shadowOffFunc();
      }
      ctx.lineWidth = linewidth;
      if (pause === false && erase === false && paintTrue === false) {
         hue += 30;
         drawShapes(
            ctx,
            e.x,
            e.y,
            slider.value,
            val1,
            val2,
            `${color}`,
            "black"
         );
      }
   });
   canvas.addEventListener("mousemove", (e) => {
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "white";
      if (pause === false && erase === true && paintTrue === false) {
         Eraser(e.x, e.y, slider.value / 1.7, 0, 6.28, false);
      }
   });
   canvas.addEventListener("mousedown", (e) => {
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "white";
      if (pause === false && erase === true && paintTrue === false) {
         Eraser(e.x, e.y, slider.value / 1.7, 0, 6.28, false);
      }
   });
}

draw();

function ctxCopy(ctxDemo) {
   ctxDemo.lineStyle = "black";
   ctxDemo.lineWidth = 12;
   ctxDemo.shadowOffsetX = 8;
   ctxDemo.shadowOffsety = 8;
   ctxDemo.shadowblur = 9;
   ctxDemo.shadowColor = "black";
}

function demo() {
   ctxCopy(ctx1);
   ctxCopy(ctx2);
   ctxCopy(ctx3);
   ctxCopy(ctx4);
   ctxCopy(ctx5);
   ctxCopy(ctx6);
   ctxCopy(ctx7);
   ctxCopy(ctx8);

   ctxBig.lineStyle = "black";
   ctxBig.lineWidth = 10;
   ctxBig.shadowOffsetX = 8;
   ctxBig.shadowOffsetY = 8;
   ctxBig.shadowBlur = 9;
   ctxBig.shadowColor = "black";
   drawShapes(
      ctx1,
      canvas1.width / 2,
      canvas1.height / 2 + 5,
      61,
      0.5,
      5,
      `${color}`
   );
   drawShapes(
      ctx2,
      canvas2.width / 2 - 1,
      canvas1.height / 2,
      56,
      1,
      20,
      `${color}`
   );
   drawShapes(
      ctx3,
      canvas3.width / 2 - 1,
      canvas1.height / 2 + 4,
      62,
      1,
      2.5,
      `${color}`
   );
   drawShapes(
      ctx4,
      canvas4.width / 2,
      canvas1.height / 2 + 1,
      62,
      0.75,
      2,
      `${color}`
   );
   drawShapes(
      ctx5,
      canvas5.width / 2 - 1,
      canvas1.height / 2 + 15,
      62,
      0.5,
      3,
      `${color}`
   );
   drawShapes(
      ctx6,
      canvas6.width / 2,
      canvas1.height / 2,
      62,
      0.5,
      6,
      `${color}`
   );
   drawShapes(
      ctx7,
      canvas7.width / 2,
      canvas1.height / 2,
      58,
      0.5,
      4,
      `${color}`
   );
   drawShapes(
      ctx8,
      canvas8.width / 2,
      canvas1.height / 2,
      66,
      0.2,
      9,
      `${color}`
   );

   canvas.addEventListener("mousemove", () => {
      ctxBig.clearRect(0, 0, canvas.width, canvas.height);
      window.addEventListener("click", () => {});
      if (pause === false) {
         drawShapes(
            ctxBig,
            bigDemo.width / 2 - 3,
            bigDemo.height / 2 - 2,
            58,
            val1,
            val2,
            `${"hsl(" + demoHue + ",95%,35%)"}`
         );
      }
   });
}

demo();

function startPosition(e) {
   painting = true;
   draw(e);
}
function endPosition() {
   painting = false;
   ctx.beginPath();
}

function drawLine(xCoordinate, yCoordinate, drawWidth, drawColor) {
   if (!paintTrue) return;
   if (pause) return;

   ctx.lineWidth = drawWidth;
   ctx.lineCap = "round";
   ctx.strokeStyle = drawColor;

   ctx.lineTo(xCoordinate, yCoordinate);
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo(xCoordinate, yCoordinate);
}

canvas.addEventListener("mousemove", (e) => {
   drawLine(e.x, e.y, slider.value / 2, `${color}`);
});

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);

let linePoints = 0;

// function drawLineTo(xCoordinate, yCoordinate, drawWidth, drawColor) {
//    if (!lineToToolOn) return;
//    // if (pause) return;
//    shadowOffFunc();

//    ctx.lineWidth = drawWidth;
//    ctx.lineCap = 'round';
//    ctx.strokeStyle = drawColor;

//    // ctx.moveTo(xCoordinate, yCoordinate);
//    // ctx.stroke();
//    ctx.beginPath();
//    ctx.lineTo(xCoordinate, yCoordinate);
//    ctx.stroke();
// }

function drawLineTo(xCoordinate, yCoordinate, drawWidth, drawColor) {
   if (!lineToToolOn) return;
   // if (pause) return;
   shadowOffFunc();

   ctx.lineWidth = drawWidth;
   ctx.lineCap = "round";
   ctx.strokeStyle = drawColor;

   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(300, 150);
   ctx.stroke();
}

canvas.addEventListener("click", (e) => {
   drawLine(e.x, e.y, slider.value / 3, `${color}`);
   console.log(e.x);
   linePoints++;
});
// canvas.addEventListener('mousemove', drawLine(slider.value, `${color}`));

// function drawShapes(context, x, y, outerRadius, inner, n, color) {

// function animate() {
//    requestAnimationFrame(animate);
//    drawShapes(e.x, e.y, 50, 0.5, 5);
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function draw() {
//    requestAnimationFrame(draw);
//    window.addEventListener('mousemove', (e) => {
//       drawShapes(e.x, e.y, 50 - 1, 0.5, 5);
//    });
// }
