// In stencil.config we deployed this file into /build/, which is then = './'
import './svgram-wc-core.js';
//Todo: models is not present in current stencil build - we need to find a way to include it
//import { Rect } from './models/rect.js';

// let r = new Rect();
// r.x="1px";r.y="1px";
// r.width="70px";
// r.heigth="60px";
// r.stroke="orange";
// r.fill="yellow";
// let container =  {shapes: [r]};

let container =  {shapes: []};

//const canvasEl = (<HTMLSvgramCanvasElement>document.querySelector('#canvas'));
const canvasEl = document.querySelector('#canvas');// as HTMLSvgramCanvasElement;
//canvasEl.content = '{ "shapes": []}';
canvasEl.content = container;
console.log("canvasEl: " + canvasEl.id);
