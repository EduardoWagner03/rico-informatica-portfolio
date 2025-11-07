# Instruções para Adicionar a Logo

## Como adicionar sua logo ao site:

1. **Prepare sua logo:**
   - Formato recomendado: PNG com fundo transparente
   - Tamanho recomendado: 200x50px (largura x altura)
   - Nome do arquivo: `logo-rico.png`

2. **Coloque a logo na pasta correta:**
   - Copie o arquivo da logo para a pasta: `public/`
   - Caminho completo: `public/logo-rico.png`

3. **A logo já está configurada:**
   - O componente Header.jsx já está configurado para usar `logo-rico.png`
   - Se quiser usar outro nome, edite o arquivo `src/components/Header.jsx` na linha 22

## Se não tiver uma logo ainda:

O site já está configurado com um fallback que mostra o texto "Rico Informática" no lugar da imagem.

## Outras imagens que você pode personalizar:

### Hero Section (Página Inicial)
- Arquivo: `src/components/Hero.jsx`
- Linha: 25
- Nome esperado: `public/hero-tech.png`
- Dimensão recomendada: 800x600px

### Sobre Nós
- Arquivo: `src/components/About.jsx`
- Linha: 39
- Nome esperado: `public/about-tech.jpg`
- Dimensão recomendada: 800x600px

### Portfólio
- Arquivo: `src/components/Portfolio.jsx`
- Atualmente usa imagens do Unsplash (online)
- Para usar imagens locais, substitua as URLs pelas suas imagens em `public/`

---

**Nota:** O site funciona perfeitamente mesmo sem essas imagens locais, pois já tem fallbacks configurados!
