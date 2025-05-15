### 🌎 Propósito do Projeto
Desenvolver um site de portfólio para um produto fictício de refrigerante chamado **Alien Water**, com foco em design moderno, animações 3D e experiência imersiva. O objetivo é mostrar habilidades com **Next.js**, **TailwindCSS**, **Three.js** e **React Three Fiber**.

---

### 🎨 Paleta de Cores

1. Lata Azul & Preta ("XenoWater Piss")
Azul Ciano Elétrico (#00CFFF aprox.)
Preto (#000000)
Cinza Metálico (da tampa e fundo da lata)
Branco (tipografia "Nutrition Facts")
Azul Claro Neon (texto "piss")

2. Lata Roxa ("AlienWater")
Roxo Vibrante (#A800FF aprox.)
Roxo Escuro (detalhes de sombra)
Branco (tipografia "AlienWater" e símbolo)
Cinza Metálico (tampa e fundo)

3. Lata Lilás & Azul ("XenoWater Piss") - Variante
Lilás Metálico (#DCAEFF aprox.)
Azul Turquesa Claro (#00D5FF aprox.)
Cinza Metálico
Preto (contornos e fundo do rótulo)
Branco (texto técnico)
Azul Neon (texto "piss")

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
   - **Home**: Hero section com animação 3D
   - **Sobre o Produto**: Descrição visual com mockups
   - **Sabores**: Cards com interação e latas 3D
   - **Contato / Call to Action**

4. **Componentes Chave**
   - `<Canvas />` com cena 3D principal
   - Modelos GLTF/GLB
   - Scroll trigger com Framer Motion
   - Navegação minimalista

5. **Responsividade e Performance**
   - Layout mobile-first
   - Lazy loading
   - Otimização de imagens e compressão de assets

6. **Extras**
   - Parallax
   - Bolhas ou fluido 3D interativo
   - Som ambiente

---

### 📒 Considerações para o Cursor

- Layout modular (`components`, `pages`, `app`)
- Mock temporário em `data/products.ts`
- `useGLTF` do Drei para carregar modelos
- Scroll animations com Framer Motion
- Evitar scripts externos pesados
- Testar com breakpoints do Tailwind

---

### 📊 Objetivo Final
Landing page visualmente impactante, responsiva, com animações 3D e estrutura profissional como projeto destaque de portfólio.
"""