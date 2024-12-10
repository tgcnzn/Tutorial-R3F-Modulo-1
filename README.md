# R3F Tutorial - Módulo 1 para Vai na Web

Bem-vindo ao repositório do **primeiro módulo do curso de R3F (React Three Fiber)**, desenvolvido para a organização social **Vai na Web**. Este módulo foi criado com o objetivo de introduzir os conceitos básicos de desenvolvimento 3D utilizando React Three Fiber e preparar os participantes para criar aplicações interativas em 3D com React e Three.js.

## Visão Geral

Este módulo apresenta:

- Um ambiente de desenvolvimento configurado com **Vite** para alta performance.
- Estrutura básica utilizando **React Three Fiber**.
- Um exemplo simples e interativo de uma caixa animada 3D com luzes dinâmicas.

## Tecnologias Utilizadas

- **React** (`^18.3.1`): Biblioteca para criação de interfaces de usuário.
- **React Three Fiber** (`^8.17.10`): Biblioteca para renderizar cenas 3D com Three.js utilizando React.
- **Three.js** (`^0.171.0`): Biblioteca para renderização e manipulação de gráficos 3D.
- **Vite** (`^6.0.1`): Ferramenta de build para desenvolvimento rápido e moderno.
- **ESLint**: Linter para garantir a qualidade do código.

## Funcionalidades do Exemplo

O exemplo apresentado neste módulo demonstra:

1. **Uma caixa animada**:

   - Rotação contínua nos eixos X, Y e Z.
   - Material com cor personalizada (`tomato`).
   - Geometria de caixa (`boxGeometry`) com dimensões ajustadas (`2x3x2`).

2. **Iluminação**:

   - Luz direcional posicionada para destacar o objeto na cena.

3. **Configuração de câmera**:
   - Posição inicial ajustada para enquadrar a caixa de maneira clara.

## Estrutura do Projeto

r3f-tutorial/
├── public/ # Arquivos estáticos
├── src/
│ ├── App.jsx # Componente principal da aplicação
│ ├── App.css # Estilização básica
│ └── main.jsx # Ponto de entrada do React
├── .eslintrc.js # Configuração do ESLint
├── package.json # Dependências e scripts do projeto
├── vite.config.js # Configuração do Vite
└── README.md # Documentação do projeto

## Como Executar

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** ou **yarn** instalados na sua máquina.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/tgcnzn/Tutorial-R3F-Modulo-1.git
   cd Tutorial-R3F-Modulo-1

   ```

2. Instale as dependências:
   npm install
   # ou
   yarn

### Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:
npm run dev

# ou

yarn dev

Acesse no navegador em: [http://localhost:5173](http://localhost:5173)

### Build para Produção

Para gerar a build de produção, execute:
npm run build

# ou

yarn build
