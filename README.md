# Landing Page – Pack Premium de Vídeos para Afiliados

Projeto estático (HTML + CSS + JS). Não precisa instalar nada.

## Estrutura
```
index.html        página
css/style.css     visual
js/config.js      TUDO que você edita (checkout, preço, vídeos, pixel, textos)
js/main.js        lógica (não precisa mexer)
videos/           coloque seus MP4 aqui
images/           capturas reais do Telegram, se quiser usar
```

## Abrir no VS Code
1. Abra a pasta no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` → **Open with Live Server**.
4. Teste no celular pelo IP local mostrado pelo Live Server (mesma rede Wi-Fi).

## Adicionar os vídeos
1. Copie os MP4 para a pasta `videos/` (ideal: vertical 9:16, H.264, até ~8 MB cada).
2. Em `js/config.js`, troque as URLs:
   - `DEMO_VIDEO_URL: "videos/demo.mp4"`
   - na `GALLERY`: `u:"videos/casa.mp4"`, `u:"videos/cozinha.mp4"` etc.
3. Arquivos .mp4/.webm/.mov usam o player nativo; links do Google Drive (/preview) continuam funcionando.

## Preencher antes de publicar
`KIWIFY_CHECKOUT_URL`, `PRODUCT_PRICE`, `ACCESS_DURATION`, `META_PIXEL_ID` em `js/config.js`.
O evento Purchase deve ser disparado pela Kiwify/webhook, não pela página.

## Subir no Git
```
git init
git add .
git commit -m "Landing page Pack Premium"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Publicar (grátis)
Vercel, Netlify ou GitHub Pages: conecte o repositório; não há build, a pasta raiz é o site.
