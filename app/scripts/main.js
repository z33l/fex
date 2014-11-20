/* global famous */
var obj = famous;
console.log(obj);

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;

var context = Engine.createContext();

var surface = new Surface({
    size: [50,50],
    properties: { background: 'red' }
});

var modifier = new Modifier({
    transform : Transform.translate(100, 100, 0)
});

context.add(modifier).add(surface);
