# 🚀 Guia Rápido - Rico Informática Portfolio

## ✅ O que foi criado?

Um site portfólio completo e profissional para a Rico Informática e Tecnologia com:

### 📑 Seções do Site:
1. ✅ **Header** - Menu fixo com navegação suave
2. ✅ **Hero/Início** - Apresentação impactante com botão de ação
3. ✅ **Sobre Nós** - História e diferenciais da empresa
4. ✅ **Serviços** - 4 cards destacando os serviços principais
5. ✅ **Por Que Escolher** - 4 motivos para escolher a Rico
6. ✅ **Portfólio** - Galeria de 6 trabalhos com efeitos hover
7. ✅ **Depoimentos** - Carrossel com 3 avaliações de clientes
8. ✅ **Equipe** - Apresentação de 3 membros da equipe
9. ✅ **Contato** - Formulário + informações completas
10. ✅ **Footer** - Rodapé com links e redes sociais
11. ✅ **Botão WhatsApp** - Flutuante no canto inferior direito

### 🎨 Design:
- ✅ Cores: Preto (#000000) e Dourado (#C6AB52)
- ✅ Fontes: Poppins e Montserrat (Google Fonts)
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves e efeitos modernos
- ✅ Scroll suave entre seções
- ✅ Menu hambúrguer no mobile

### 🛠️ Tecnologias:
- ✅ React 18
- ✅ Bootstrap 5
- ✅ TailwindCSS
- ✅ Font Awesome Icons

## 🎯 Como Usar

### 1️⃣ Primeira Execução (já feito):
```bash
npm install
npm start
```

### 2️⃣ Acessar o Site:
O navegador abrirá automaticamente em: **http://localhost:3000**

### 3️⃣ Personalizar:

#### 📝 Editar Textos:
Todos os textos estão nos componentes em `src/components/`:
- `Hero.jsx` - Texto principal
- `About.jsx` - Sobre a empresa
- `Services.jsx` - Descrição dos serviços
- `Contact.jsx` - Informações de contato
- etc.

#### 🖼️ Adicionar Logo:
1. Coloque sua logo em `public/logo-rico.png`
2. Recomendado: PNG transparente, 200x50px

#### 📱 Atualizar WhatsApp:
Já configurado: `(47) 99776-2425`
Para mudar, edite:
- `src/components/Contact.jsx` (linha 89)
- `src/components/WhatsAppButton.jsx` (linha 21)
- `src/components/Footer.jsx` (linha 43)

#### 🎨 Mudar Cores:
Arquivo: `tailwind.config.js`
```javascript
'rico-black': '#000000',  // Preto
'rico-gold': '#C6AB52',   // Dourado
'rico-text': '#E0E0E0',   // Texto claro
```

### 4️⃣ Criar Versão Final (Deploy):
```bash
npm run build
```
A pasta `build/` terá todos os arquivos prontos para publicar online.

## 🌐 Publicar Online (GRATUITO)

### Opção 1: Vercel (Recomendado)
1. Acesse: https://vercel.com
2. Conecte seu GitHub
3. Importe o projeto
4. Deploy automático!

### Opção 2: Netlify
1. Acesse: https://netlify.com
2. Arraste a pasta `build/` para o site
3. Pronto!

## 📁 Estrutura de Pastas

```
rico-portfolio/
├── public/              # Arquivos públicos
│   ├── index.html       # HTML principal
│   └── logo-rico.png    # Logo (adicione aqui)
├── src/
│   ├── components/      # Todos os componentes
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.js           # Componente principal
│   └── index.css        # Estilos globais
└── package.json         # Dependências
```

## 🆘 Comandos Úteis

```bash
npm start          # Iniciar servidor (localhost:3000)
npm run build      # Criar versão de produção
npm test           # Executar testes
```

## 📞 Contato Configurado

- **Endereço:** Irineópolis - SC
- **WhatsApp:** (47) 99776-2425
- **Horário:** Segunda a Sexta — 8h às 18h | Sábado — 8h às 12h

## ✨ Recursos Especiais

- ✅ Scroll suave ao clicar nos links do menu
- ✅ Header que muda ao rolar a página
- ✅ Botão WhatsApp aparece após rolar 300px
- ✅ Efeito hover em todos os cards
- ✅ Carrossel automático de depoimentos
- ✅ Formulário de contato (estático)
- ✅ Links de redes sociais prontos
- ✅ Scrollbar customizada (dourada)

## 🎉 Está Pronto para Usar!

O site está **100% funcional** e pronto para publicação.
Basta personalizar os textos e adicionar suas imagens!

---

**Desenvolvido para Rico Informática e Tecnologia** ⚡
