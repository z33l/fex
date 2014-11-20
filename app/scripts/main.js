/* global famous */
'use strict';

var obj = famous;
console.log(obj);

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var context = Engine.createContext();

var surface = new Surface({
    size: [70,70],
    properties: { background: 'red' }
});

var stateModifier = new StateModifier({
  opacity: 1
});

context.add(stateModifier).add(surface);

stateModifier.setOpacity(
    0,
    {curve: 'linear', duration: 500},
    function() { console.log('animation finished!'); }
);
