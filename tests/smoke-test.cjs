// Smoke tests do Checkpoint Rush. Executar com: node tests/smoke-test.cjs
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
assert(html.includes('CHECKPOINT RUSH'), 'Título do jogo ausente');
assert(html.includes('Filhos de Blanka') || html.includes('FILHOS DE BLANKA'), 'Assinatura do estúdio ausente');
assert(html.includes('▶ START'), 'Botão START ausente');
const script = html.match(/<script>([\s\S]*?)<\/script><\/body><\/html>/)?.[1];
assert(script, 'Script de gameplay ausente');
new Function(script);
const a = script.indexOf('function rgb3(');
const b = script.indexOf('function draw3D(){', a);
assert(a >= 0 && b > a, 'Geometrias do motor 3D ausentes');
const vertices = [];
const player = {distance: 109, speed: 145, lateral: 0};
const camera = {x: 0, y: 4.18, z: 100};
const factory = new Function('camera3','renderWidth3','renderHeight3','vertices3',
  'sceneTime','player','stageIndex','STAGES','trackX', script.slice(a,b) +
  '; return {carV2, obstacleV2, road3};');
let checks = 0;
for (let stage = 0; stage < 3; stage++) {
 const m = factory(camera,1100,700,vertices,5,player,stage,
  [{end:1550},{end:3200},{end:4900}], d=>Math.sin(d/370)*8);
 for(const model of ['uno','hatch','sedan','taxi','pickup','utility','van']){
  vertices.length = 0;
  m.carV2(0,160,model==='uno'?'#ffffff':'#d84a38',model,model==='uno');
  assert(vertices.length > 100 && vertices.every(Number.isFinite), 'Geometria '+model);
  checks++;
 }
 for(const type of ['cone','barrel','barrier','tires','crate']){
  vertices.length=0;m.obstacleV2(0,160,type);
  assert(vertices.length > 0 && vertices.every(Number.isFinite), 'Obstáculo '+type);
  checks++;
 }
 vertices.length=0;m.road3();
 assert(vertices.length>0 && vertices.every(Number.isFinite), 'Pista '+stage);
 checks++;
}
assert(script.includes('function checkpoint()'), 'Checkpoint ausente');
assert(script.includes('function collide(o)'), 'Colisões ausentes');
console.log('OK: sintaxe, menu, 7 veículos, 5 obstáculos, 3 pistas e checkpoints; '+checks+' testes geométricos.');
