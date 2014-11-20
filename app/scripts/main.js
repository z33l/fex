/* global famous */
var obj = famous;
console.log(obj);

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;

var context = Engine.createContext();

var surface = new Surface({
    size: [50,50],
    properties: { background: 'red' }
});

context.add(surface);
