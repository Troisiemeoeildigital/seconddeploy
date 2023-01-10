let el = document.querySelector('.draggable');
let dragger = tableDragger(el, {
  mode: 'free',
  dragHandler: '.handle',
  animation: 300
});
// Draggables for assessment EN45555
let en45555draggable = document.querySelector('.en45555draggable');
let en45555dragger = tableDragger(en45555draggable, {
  mode: 'free',
  dragHandler: '.handle',
  animation: 300
});

let gramdraggable = document.querySelector('.gramdraggable');
let gramdragger = tableDragger(gramdraggable, {
  mode: 'free',
  dragHandler: '.handle',
  animation: 300
});


let percdraggable = document.querySelector('.percdraggable');
let percdragger = tableDragger(percdraggable, {
  mode: 'free',
  dragHandler: '.handle',
  animation: 300
});

let en45557draggable = document.querySelector('.en45557draggable');
let en45557dragger = tableDragger(en45557draggable, {
  mode: 'free',
  dragHandler: '.handle',
  animation: 300
});

let en45558draggable = document.querySelector('.en45558draggable');
let en45558dragger = tableDragger(en45558draggable, {
  mode: 'free',
  dragHandler: '.handle',
  animation: 300
});
