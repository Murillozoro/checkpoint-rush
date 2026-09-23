# Checkpoint Rush — plano de refação visual e técnica

## Objetivo
Jogo arcade 3D para navegador e YouTube Playables. Um único carro jogável: hatch branco com silhueta inspirada no Uno clássico, escada laranja e adesivo Filhos de Blanka. Menu: nome, imagem do carro e START. Derrota apenas por esgotamento do tempo antes do checkpoint; colisões diminuem velocidade, sem vidas.

## Implementado nesta atualização
- [x] `carV2()`: carro do jogador com teto mais quadrado e alto, frente curta, traseira reta, vidros e lanternas separados, rack e escada laranja.
- [x] Frota com seis silhuetas: hatch, sedan, van, táxi, picape e utilitário; variação de cores e alturas; compatibilidade com objetos salvos do protótipo.
- [x] Obstáculos tridimensionais distintos: cone, barril, barricada, pilha de pneus e caixa.
- [x] Direção e câmera suavizadas, sem alterar o sistema de checkpoints e cronômetro.
- [x] Arquivo HTML autônomo na raiz do repositório; publicação via GitHub Pages já configurada pelo proprietário.

## Próxima etapa: refinamento visual e balanceamento
1. **Carro do jogador**: substituir primitivas por um modelo 3D autoral de geometria otimizada, com para-brisa inclinado, caixas de roda, pneus, para-choques e UV para aplicar a logo sem distorcer. Conferir a leitura do modelo nas visões traseira e três quartos.
2. **Frota NPC**: criar malhas 3D com distinção por categoria; usar poucas texturas compartilhadas e instanciar/reutilizar modelos para diminuir custo em dispositivos móveis.
3. **Estrada e cenário**: trabalhar curvas em continuidade tangente, acostamentos, faixas e guardrails seguindo o traçado; variar litoral, serra e cidade com boa visibilidade e sem bloquear a câmera.
4. **Obstáculos e colisões**: separar os obstáculos inofensivos de acostamento dos obstáculos de pista, e vincular as dimensões visuais às áreas de colisão.
5. **Polimento**: materiais foscos e brilhantes, luz ambiente e direcional suaves, sombra simples sob os veículos, animação de rodas, efeitos de velocidade discretos e qualidade adaptativa no celular.
6. **Jogabilidade**: testar tempo por trecho em partidas reais, com 0 a 5 colisões; calibrar penalidade para que o tempo, e não um contador oculto, determine o game over.
7. **Validação**: conferir HTML/JavaScript, WebGL no Chrome/Edge/Android, teclado, toque, perda e recuperação do contexto WebGL e integração com o YouTube Playables.

**Limite atual:** os veículos continuam montados a partir de geometria procedural simples. A imagem conceitual cinematográfica é uma referência de arte, não um frame renderizado pela versão WebGL disponível hoje.
