# Checkpoint Rush — refação 3D v3 (Filhos de Blanka)

**Jogo publicado:** https://murillozoro.github.io/checkpoint-rush/

## Implementações no HTML atual
- [x] Tela inicial minimalista: nome do jogo, imagem do único veículo e botão START.
- [x] Carro branco inspirado no Uno clássico: cabine mais alta e inclinada, teto, molduras, traseira reta, lanternas e para-choques; escada laranja e adesivo Filhos de Blanka.
- [x] Seis classes de veículos no tráfego com proporções e cores distintas: hatch, sedã, táxi, picape, utilitário e van.
- [x] Cinco obstáculos 3D: cone, barricada, barril, pneus empilhados e caixa; colisões desaceleram.
- [x] Pistas com retas e curvas, faixas, acostamento, guardrails contínuos, postes refletores e portal de checkpoint com acabamento quadriculado.
- [x] Variações de litoral, serra e cidade noturna, incluindo rochas, vegetação, placas de curva, iluminação urbana e edifícios.
- [x] Câmera e campo de visão vinculados à velocidade, efeitos periféricos discretos e limite de resolução para celular.
- [x] Regra do jogo mantida: sem vidas/dano ao carro; perder ocorre por tempo esgotado. Chegar ao checkpoint concede novo tempo.
- [x] Verificações de sintaxe e geração de geometria dos sete modelos, cinco obstáculos e três trechos. Teste repetível: `node tests/smoke-test.cjs`.

## Limites e validação em andamento
- A arte ainda é **3D procedural estilizado**, não uma malha de carro de alta fidelidade e não uma renderização fotorealista como a imagem conceitual. Para atingir aquele nível visual, o próximo investimento é um modelo 3D otimizado com materiais e texturas dedicados.
- É necessário validar manualmente a renderização WebGL no Chrome/Edge e em pelo menos um telefone Android real, inclusive com baixa potência, além de confirmar responsividade da interface.
- O teste automático verifica sintaxe e geometria; **não** substitui uma partida completa nem certifica o pacote no YouTube Playables.
- Calibrar tempos e penalidades em partidas reais (sem batidas, 1 a 4 batidas, cerca de 5 batidas), principalmente na serra e cidade, sem introduzir limite oculto de colisões.
- Depois de validar no GitHub Pages, empacotar e testar o SDK e as exigências de publicação do YouTube Playables. O GitHub Pages é somente uma hospedagem para testes, não a publicação no YouTube.

## Como atualizar e jogar
O jogo é autocontido em `index.html` na raiz. O GitHub Pages publica a branch `main`, pasta `/(root)`. Após cada commit, aguarde a publicação e use Ctrl+F5 para atualizar o cache.
