# Nome do Projeto

## Descrição
Este é um projeto de demonstração de uma pesquisa simples, mas bastante performática, que utiliza a API da OneGov. Além disso, o projeto utiliza cacheamento inteligente para melhorar a eficiência da pesquisa.

## Tecnologias Utilizadas
- Next.js
- React
- Context API
- React-query
- Material-UI

## Como Utilizar
1. Certifique-se de ter o Node.js e o NPM instalados em sua máquina.
2. Faça o clone do repositório em sua máquina.
3. Abra o terminal na pasta do projeto e rode o comando npm install para instalar as dependências.
4. Crie um arquivo .env.local na raiz do projeto e adicione as variáveis de ambiente necessárias. Utilize o prefixo NEXT_PUBLIC_ para as variáveis locais que serão utilizadas pelo Next.js.
5. Rode o comando npm run dev para iniciar o servidor de desenvolvimento.
6. Abra o projeto em seu navegador através da URL http://localhost:3000.

## Arquitetura
O projeto utiliza em sua grande parte uma arquitetura inspirada KISS — keep it simple stupid e por força deste destino, a estrutura básica do projeto se tornando a seguinte:

```
scss
Copy code
projeto
└── src/
    ├── assets/
    ├── components/
        ├── InputText/
        ├── Button/
    ├── features/ (fluxos)
        ├── dashboard/
        ├── auth/
            ├── assets/
            ├── components/
            ├── hooks/
            ├── helpers/
            ├── services/
            ├── screens/ (lógica de tela)
                ├── list/
                    ├── ui/ (componentes de tela)
                        ├── index.tsx
                        ├── styles.ts
                    ├── index.tsx
            ├── types/
            ├── model/
            ├── navigation.tsx
    ├── services/
    ├── helpers/
    ├── store/
    ├── styles/
    └── utils/
```

Observações:

-Apesar de haver um diretório store listado acima, talvez 90% da arquitetura do app NÃO é Redux de fato. Além de que, existem várias ressalvas à serem feitas antes de utilizá-lo no projeto. No caso foi ultlizado Context API
-Esta não é a árvore completa e sim apenas um resumo dos diretórios mais importantes.

## Funcionalidades

- Pesquisa performática com cacheamento inteligente, filtros e opção para mudar a exibição para melhor visualização em dispositivos móveis.
- Responsividade para se adaptar a diferentes tamanhos de tela.
- Cacheamento inteligente de requisições utilizando a biblioteca React-query.
- Cacheamento de componentes utilizando Context API.

Além das funcionalidades mencionadas anteriormente, é importante destacar que a experiência do usuário foi um aspecto fundamental do desenvolvimento deste projeto. Todo o design de interface e experiência do usuário foi cuidadosamente planejado e implementado para garantir a melhor usabilidade possível. Para isso, foram utilizadas técnicas de design responsivo para se adequar a diferentes dispositivos e tamanhos de tela.

Ademais, para a estilização, foi utilizado o Material-UI como base, mas também foram desenvolvidos estilos próprios, visando uma aparência mais agradável e coerente com a identidade visual do projeto. Tudo isso com o objetivo de criar uma experiência de usuário que fosse intuitiva, agradável e satisfatória.

## Contribuição
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma Issue ou enviar um Pull Request para este repositório.
