# ademarchamineto.github.io

Meu portfólio pessoal: **https://ademarchamineto.github.io**

Site estático feito à mão (HTML, CSS e JavaScript, sem framework), com:

- versão em português e inglês (`?lang=en`);
- tema claro e escuro, seguindo o sistema;
- layout responsivo e acessível (navegação por teclado, contraste, `prefers-reduced-motion`);
- publicação automática pelo GitHub Pages.

## Como atualizar

- **Foto:** `assets/foto.jpg`, quadrada, por volta de 600×600. Se não existir, aparecem as iniciais.
- **Currículo:** `assets/curriculo-ademar-chami-neto.pdf`.
- **Prints dos projetos:** `assets/projects/`, em 16:10 e 1200×750.
- **Textos em inglês:** ficam no objeto `EN` em `main.js`. As chaves são os `data-i18n` do HTML.

## SEO e medição

- **Meta tags, Open Graph e JSON-LD** (`Person`, `WebSite` e a lista de projetos) no `<head>` do `index.html`. A imagem de compartilhamento é `assets/og-image.jpg` (1200×630).
- **Ícones:** `favicon.ico`, `assets/favicon.svg`, `assets/apple-touch-icon.png` e os ícones do `manifest.webmanifest`.
- **`sitemap.xml`, `robots.txt` e `llms.txt`** na raiz. Ao criar uma página nova, adicione no sitemap.
- **Google Analytics 4 e Microsoft Clarity:** preencha `GA_ID` e `CLARITY_ID` no topo de `analytics.js`. Os scripts só carregam depois que o visitante clica em **Aceitar** no aviso de cookies (LGPD); a escolha pode ser mudada pelo link "Cookies" no rodapé. Detalhes em `privacidade.html`.
- **Search Console:** cole a meta `google-site-verification` no lugar indicado no `<head>` e envie o `sitemap.xml`.
