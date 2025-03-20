# Convert Template

Bem-vindo ao **Convert Template**! Este é um conversor de moedas simples e dinâmico, desenvolvido para facilitar a conversão de valores de **USD, EUR, GBP e ARS** para **BRL (Real brasileiro)**.

![Projeto  - Convert Template](https://github.com/user-attachments/assets/fdc18491-cfb3-42cb-8532-4f02142ed0ff)

🔗 Acesse o projeto: [https://jaojogadez.github.io/convert-template/]

## 💡 Funcionalidades

- ✨ **Conversão de Moedas**: Converte valores de diferentes moedas para reais em segundos.
- 🔒 **Validação de Entrada**: Garante que apenas valores numéricos sejam inseridos.
- ⏳ **Atualização em Tempo Real**: Exibe a taxa de câmbio no momento da conversão.
- ⚠ **Tratamento de Erros**: Emite alertas caso algum erro ocorra.
- 👀 **Interface Simples e Intuitiva**: Apresenta os resultados de forma clara e objetiva.

## 💪 Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3 + Bootstrap**: Estilização responsiva.
- **JavaScript**: Lógica de conversão e interatividade.

## 🛠 Requisitos

- Um navegador moderno (Chrome, Firefox, Edge, etc.).
- Não é necessário servidor backend, pois o projeto é totalmente client-side.

## 📚 Instalação e Uso

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/jaojogadez/convert-template.git
    ```

2. **Acesse a pasta do projeto:**

    ```bash
    cd convert-template
    ```

3. **Abra o arquivo `index.html` no seu navegador.**

4. **Como utilizar:**
   - Insira o valor no campo "Valor".
   - Escolha a moeda de origem.
   - Clique no botão "Converter em reais".
   - O valor convertido aparecerá abaixo!

## 💡 Como Funciona?

### Conversão de Moeda
A lógica de conversão está no arquivo `script.js`, onde os valores são multiplicados pelas taxas predefinidas:

```javascript
const taxas = {
    USD: 5.6,
    EUR: 6.19,
    GBP: 7.35,
    ARS: 0.0059
};
```

A função principal `convertCurrency()` calcula o valor final e o exibe na tela:

```javascript
function convertCurrency(amount, rate, symbol) {
    let total = amount * rate;
    result.innerHTML = `${formatCurrencyBRL(total)} Reais`;
}
```

## 🛠 Contribuição

Quer ajudar a melhorar o projeto? Siga estes passos:

1. **Fork** no repositório.
2. Crie uma nova branch (`feature-minha-melhoria`).
3. Faça as alterações e dê commit.
4. Envie um **pull request** para análise.

## 💎 Licença

Este projeto está sob a licença **MIT**. Isso significa que você pode usá-lo, modificá-lo e compartilhá-lo livremente, desde que dê os devidos créditos.

## 👥 Contato

Criado por **@jaojogadez**. Para dúvidas ou sugestões:
- GitHub: [https://github.com/jaojogadez](https://github.com/jaojogadez)

