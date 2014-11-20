/* global famous */
var obj = famous;
console.log(obj);

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;

var context = Engine.createContext();

var surface = new Surface({
    size: [70, 70],
    properties: { background: 'red' }
});

var sizeModifier = new Modifier({
    size: [200, 200],
    align: [0.5, 0.5]
});

var centerModifier = new Modifier({
    //origin: [0.5,0.5]
});

context
  .add(sizeModifier)
  .add(centerModifier)
  .add(surface);
