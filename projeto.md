
### 🌎 Propósito do Projeto
Desenvolver um site de portfólio para um produto fictício de refrigerante chamado **Alien Water**, com foco em design moderno, animações 3D e experiência imersiva. O objetivo é mostrar habilidades com **Next.js**, **TailwindCSS**, **Three.js** e **React Three Fiber**.

---

### 🎨 Paleta de Cores

1. Lata Azul & Preta ("XenoWater Piss")
   - Azul Ciano Elétrico (#00CFFF aprox.)
   - Preto (#000000)
   - Cinza Metálico (da tampa e fundo da lata)
   - Branco (tipografia "Nutrition Facts")
   - Azul Claro Neon (texto "piss")

2. Lata Roxa ("AlienWater")
   - Roxo Vibrante (#A800FF aprox.)
   - Roxo Escuro (detalhes de sombra)
   - Branco (tipografia "AlienWater" e símbolo)
   - Cinza Metálico (tampa e fundo)

3. Lata Lilás & Azul ("XenoWater Piss") - Variante
   - Lilás Metálico (#DCAEFF aprox.)
   - Azul Turquesa Claro (#00D5FF aprox.)
   - Cinza Metálico
   - Preto (contornos e fundo do rótulo)
   - Branco (texto técnico)
   - Azul Neon (texto "piss")

---

### 📅 Etapas do Projeto

1. **Planejamento**
   - Definição de identidade visual baseada nas latas criadas no Blender
   - Escolha de assets 3D (lata, garrafa, fluidos, background animado)

2. **Stack Tecnológico**
   - **Frontend**: Next.js + TailwindCSS
   - **3D**: React Three Fiber + Drei + Three.js
   - **Deploy**: Vercel
   - **Assets**: Armazenamento Cloudinary (ou local)

3. **Páginas Principais**
   - Página única com 5 seções animadas (scroll contínuo)

---

### 🧱 Estrutura das Hero Sections

1. **Seção 1 - Marca Principal**
   - Fundo com Azul Ciano Elétrico (#00CFFF) ou Roxo Vibrante (#A800FF)
   - Latas flutuando em cena 3D
   - Headline e subheadline + botão CTA
   - Animação suave de idle/flutuação com iluminação 3D

2. **Seção 2 - Lata Caindo + Texto Scroll**
   - Lata 3D animada caindo do topo da tela
   - Palavras-chave aparecendo conforme o scroll (GSAP ScrollTrigger)
   - Fundo com gradiente entre Roxo Escuro e Azul Neon (#A800FF → #00CFFF)

3. **Seção 3 - Seletor de Garrafas**
   - Interface tipo “escolher personagem”
   - 3 garrafas lado a lado
   - Botões de navegação animando a troca da garrafa com rotação sutil
   - Texto e botão de ação abaixo

4. **Seção 4 - Lata e Texto Alternado**
   - Ao scrollar, o texto aparece em blocos laterais
   - A garrafa 3D troca de lado (esquerda/direita) de forma fluida
   - Animação sincronizada com ScrollTrigger

5. **Seção 5 - Encerramento com Selo**
   - Banner final com slogan animado
   - Selo girando continuamente em loop
   - Marca central como encerramento da experiência

---

### 🧩 Componentes Chave
- `<Canvas />` com câmera 3D controlada
- Modelo GLTF/GLB (com `.bin`)
- ScrollTrigger do GSAP para animações suaves
- O usuário não deve interagir com os objetos 3D
- Animações customizadas com `useFrame`
- Componentização por seção (`Section1Hero.tsx`, `Section2Scroll.tsx`, etc.)

---

### 📱 Responsividade e Performance
- Layout mobile-first com Tailwind
- Lazy loading dos modelos 3D
- Compressão de assets e imagens
- Otimização de interação em touch

---

### 📒 Considerações para o Cursor
- Estrutura baseada em App Router (`/app`)
- Componentes organizados por seção
- Cenas controladas com GSAP e React Three Fiber
- ScrollTrigger com pinning e snapping suave
- Evitar sobreposição não controlada de canvas

---

### 📊 Objetivo Final
Landing page visualmente marcante, com storytelling animado, conteúdo 3D interativo e estrutura escalável para portfólio de produto digital.
