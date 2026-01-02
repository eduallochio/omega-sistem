# Omega Sistem - Portfólio Profissional

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Portfólio profissional single-page de Eduardo Allochio (Omega Sistem) - Desenvolvedor Full Stack. Site estático otimizado para SEO, performance e conversão de leads.

🔗 **[Ver Demo](https://omegasistem.com.br/)**

## 📋 Sobre o Projeto

Site institucional e portfólio desenvolvido com HTML5, CSS3 e JavaScript vanilla (sem frameworks), focado em performance, SEO e experiência do usuário. Apresenta projetos finalizados, serviços oferecidos e formas de contato.

### ✨ Principais Funcionalidades

- 🎨 Design moderno e responsivo (mobile-first)
- 📱 Totalmente responsivo para todos os dispositivos
- ⚡ Performance A+ (otimizado para carregamento rápido)
- 🔍 SEO otimizado (Schema.org, Open Graph, sitemap)
- 🎭 Animações suaves com AOS (Animate On Scroll)
- 🎯 Sistema de filtros por categoria de projetos
- 📄 Paginação automática de projetos (6 por página)
- 📊 Estatísticas dinâmicas que se atualizam automaticamente
- 💬 Integração com WhatsApp
- 🚀 Deploy simples (arquivos estáticos)

## 🛠️ Tecnologias Utilizadas

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com CSS Variables e Flexbox/Grid
- **JavaScript ES6** - Interatividade e comportamentos

### Bibliotecas Externas (CDN)
- **AOS 2.3.1** - Animações on scroll
- **Font Awesome 6.4.0** - Ícones
- **Google Fonts (Poppins)** - Tipografia

### SEO e Meta Tags
- Schema.org (Person + WebSite)
- Open Graph Protocol
- Twitter Cards
- Sitemap XML
- Robots.txt

## 📂 Estrutura do Projeto

```
portifolio/
├── index.html              # Página principal (SPA)
├── styles.css              # CSS source
├── styles.min.css          # CSS minificado (produção)
├── script.js               # JavaScript source
├── script.min.js           # JavaScript minificado (produção)
├── sitemap.xml             # Sitemap para SEO
├── robots.txt              # Configuração para crawlers
├── .gitignore             # Arquivos ignorados pelo Git
├── README.md              # Este arquivo
└── img/                   # Imagens e assets
    ├── logo-claro.png
    ├── logo-escuro.png
    ├── avatar.png
    ├── favicon.png
    └── montenegro.png
```

## 🚀 Como Usar

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/eduallochio/omega-sistem.git
cd omega-sistem
```

2. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

3. Acesse `http://localhost:8000`

### Deploy

O site é composto apenas de arquivos estáticos e pode ser hospedado em:
- GitHub Pages
- Netlify
- Vercel
- Servidor Apache/Nginx
- Qualquer serviço de hospedagem estática

Simplesmente faça upload dos arquivos para o servidor.

## 🎨 Personalização

### Atualizar Estatísticas Automáticas

As estatísticas se atualizam automaticamente baseadas nos elementos da página:

- **Anos de Experiência**: Edite `startYear` em `script.js` (linha 3)
- **Parcerias**: Adicione logos em `.clients-grid` no HTML
- **Projetos**: Adicione cards em `.finished-projects-grid` no HTML

### Adicionar Novo Projeto

1. Copie um card `.finished-project-card` existente
2. Altere o conteúdo (título, descrição, imagem, URL)
3. Defina a categoria no atributo `data-category`
4. O contador e paginação se atualizam automaticamente

Categorias disponíveis:
- `Agronegócio`
- `Serviços`
- `Institucional`
- `Sistema de Gestão`
- `Consultoria Jurídica`
- `CRM & Gestão Empresarial`
- `Blog & Conteúdo`

### Cores e Tema

As cores são definidas via CSS Variables em `:root` no `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-color: #333;
    --bg-color: #ffffff;
    /* ... */
}
```

### Minificação

Para minificar arquivos após edições:

**PowerShell (Windows):**
```powershell
# CSS
$css = Get-Content "styles.css" -Raw
$css = $css -replace '/\*[\s\S]*?\*/', ''
$css = $css -replace '\s+', ' '
$css = $css -replace '\s*([{}:;,])\s*', '$1'
$css = $css.Trim()
$css | Out-File "styles.min.css" -Encoding UTF8 -NoNewline

# JavaScript
$js = Get-Content "script.js" -Raw
$js = $js -replace '//.*', ''
$js = $js -replace '/\*[\s\S]*?\*/', ''
$js = $js -replace '\s+', ' '
$js = $js -replace '\s*([{}()\[\];,:])\s*', '$1'
$js = $js.Trim()
$js | Out-File "script.min.js" -Encoding UTF8 -NoNewline
```

Ou use ferramentas online:
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

## 📊 Funcionalidades Detalhadas

### Sistema de Filtros
- Filtra projetos por 8 categorias diferentes
- Interface com botões intuitivos e ícones
- Atualiza automaticamente a paginação

### Paginação
- Limite de 6 projetos por página
- Navegação "Anterior" e "Próximo"
- Contador de páginas (atual/total)
- Scroll automático ao trocar de página

### Estatísticas Automáticas
- Calcula anos de experiência dinamicamente
- Conta parcerias automaticamente
- Conta projetos totais (finalizados + em desenvolvimento)

### Otimizações Aplicadas
- Preload de recursos críticos
- Lazy loading de imagens
- Defer em scripts não-críticos
- Font display swap
- CSS e JS minificados

## 🔧 Configuração

### Alterar Informações de Contato

Edite as seguintes seções no `index.html`:

- **Email**: Linha ~860
- **WhatsApp**: Linhas ~869 e ~907
- **Localização**: Linha ~878
- **Redes Sociais**: Linhas ~890-902 e ~920-932

### Atualizar SEO

1. **Meta Tags**: `index.html` linhas 6-39
2. **Schema.org**: `index.html` linhas 70-112
3. **Sitemap**: `sitemap.xml` - atualizar `<lastmod>` com data atual

## 📱 Responsividade

Breakpoints principais:
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

Todos os componentes são totalmente responsivos e adaptam-se automaticamente.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Eduardo Allochio** - *Desenvolvedor Full Stack*

- Website: [omegasistem.com.br](https://omegasistem.com.br)
- LinkedIn: [eduardo-allochio](https://linkedin.com/in/eduardo-allochio)
- GitHub: [@eduallochio](https://github.com/eduallochio)
- Email: eduallochio2@outlook.com
- WhatsApp: [(27) 99871-4453](https://wa.me/5527998714453)

## 🙏 Agradecimentos

- [AOS Library](https://michalsnik.github.io/aos/) - Animações
- [Font Awesome](https://fontawesome.com/) - Ícones
- [Google Fonts](https://fonts.google.com/) - Tipografia Poppins

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Desenvolvido com ❤️ por Eduardo Allochio - Omega Sistem**
