# 🎈 Cartão Virtual de Aniversário

Um cartão virtual animado e interativo para celebrar aniversários de forma especial e memorável.

![Preview](https://img.shields.io/badge/Status-Completo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Funcionalidades

### 🎨 Design
- Tema escuro elegante com gradientes roxo/azul
- Efeitos de glassmorphism nos cards
- Tipografia premium (Playfair Display, Dancing Script, Poppins)
- Totalmente responsivo (Desktop, Tablet, Mobile)

### 🎈 Balões Animados
- 12 balões flutuantes com 8 cores vibrantes
- Movimento orgânico e fluido
- Efeito de brilho (glow) pulsante
- Tamanhos variados (pequeno, médio, grande)

### 🌟 Efeitos de Fundo
- Estrelas cintilantes
- Partículas coloridas flutuantes
- Corações e estrelas decorativas
- Gradientes animados

### 📸 Galeria de Fotos
- Grid responsivo com 8 fotos
- Lightbox para visualização ampliada
- Efeito hover com zoom e overlay
- Navegação entre fotos

### 🎠 Carrossel de Momentos
- Slides com legendas
- Navegação por setas e dots
- Loop infinito
- Touch/swipe em dispositivos móveis

### 💌 Modal de Mensagem
- Mensagem personalizada de aniversário
- Botão "Celebrar" com explosão de confetes
- Notificação toast de celebração

### 🎯 Seções
- **Hero** - Título animado com indicador de scroll
- **Contadores** - Estatísticas divertidas
- **Mensagem** - Texto especial em card elegante
- **Momentos** - Carrossel de fotos
- **Galeria** - Grid de memórias
- **Desejos** - 6 cards com votos

---

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` no navegador

### Opção 2: Servidor Local
```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve

# Com PHP
php -S localhost:8000
```

---

## 🎨 Personalização

### Trocar Fotos
Substitua as URLs das imagens no `index.html`:

```html
<!-- Carrossel -->
<img src="SUA_FOTO.jpg" alt="Descrição">

<!-- Galeria -->
<a href="FOTO_GRANDE.jpg" class="open-gallery">
    <img src="FOTO_MINIATURA.jpg">
</a>
```

### Editar Mensagens
Encontre os textos no `index.html` e personalize:

```html
<!-- Mensagem principal -->
<p class="fs-10">
    Sua mensagem personalizada aqui...
</p>

<!-- Modal -->
<p class="fs-9">
    Querido(a) [NOME]...
</p>
```

### Alterar Cores
Edite as variáveis CSS no `<style>` do `index.html`:

```css
:root {
    --primary: #ff6b9d;      /* Rosa */
    --secondary: #c44569;    /* Rosa escuro */
    --accent: #ffd93d;       /* Dourado */
    --purple: #a855f7;       /* Roxo */
}
```

### Cores dos Balões
Edite o arquivo `balloons.css` para criar novas cores:

```css
.sua-cor {
    background: linear-gradient(135deg, rgba(R, G, B, 0.85), rgba(R, G, B, 0.75));
    box-shadow: 0 0 40px rgba(R, G, B, 0.4);
}
```

---

## 📁 Estrutura do Projeto

```
📦 Baloes-voando-main
 ┣ 📜 index.html      # Página principal
 ┣ 📜 balloons.css    # Estilos dos balões
 ┣ 📜 balloons.js     # Animação dos balões
 ┗ 📜 README.md       # Documentação
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica |
| **CSS3** | Estilos, animações, glassmorphism |
| **JavaScript** | Interatividade e animações |
| **Squeleton** | Framework CSS utilitário |
| **Embla Carousel** | Carrossel de fotos |
| **VenoBox** | Lightbox da galeria |
| **Toastify** | Notificações toast |
| **WOW.js** | Animações on-scroll |
| **Google Fonts** | Tipografia premium |

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| 🩷 Rosa | `#ff6b9d` | Cor primária |
| 💜 Roxo | `#a855f7` | Cor secundária |
| 💛 Dourado | `#ffd93d` | Destaques |
| 🌑 Escuro | `#1a1a2e` | Background |

---

## 📱 Responsividade

O cartão se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop** (≥1200px) - Layout completo
- **Tablet** (≥768px) - Grid adaptado
- **Mobile** (≤767px) - Layout em coluna única

---

## 🎉 Recursos Interativos

1. **Botão "Ver Mensagem"** - Abre modal com mensagem especial
2. **Botão "Ver Fotos"** - Scroll suave até a galeria
3. **Botão "Celebrar!"** - Explosão de 150 confetes coloridos
4. **Galeria** - Clique para abrir lightbox
5. **Carrossel** - Navegue pelos momentos especiais

---

## 📄 Licença

Este projeto é livre para uso pessoal. Sinta-se à vontade para personalizar e compartilhar com pessoas especiais!

---

## 💖 Créditos

- Imagens de exemplo: [Picsum Photos](https://picsum.photos)
- Ícones: [Iccon](https://iccon.dev) (via Squeleton)
- Framework CSS: [Squeleton](https://squeleton.dev)
- Fontes: [Google Fonts](https://fonts.google.com)

---

<div align="center">

Feito com ❤️ para celebrar momentos especiais

**🎈 Feliz Aniversário! 🎂**

</div>
