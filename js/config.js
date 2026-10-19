/* ========= CONFIGURAÇÃO CENTRAL: edite só aqui ========= */
const CONFIG={
  KIWIFY_CHECKOUT_URL:"#",          // cole o link real do checkout
  PRODUCT_PRICE:"R$ 29,90",         // ex.: "R$ 27,90" (vazio = oculta preço)
  ACCESS_DURATION:"Acesso vitalício",  // ex.: "Acesso vitalício" (vazio = texto padrão no FAQ)
  DEMO_VIDEO_URL:"videos/principal.mp4",
  GALLERY:[ // vídeos locais na pasta /videos; vazio = card "em breve"
    {t:"Achadinhos para Casa",u:"videos/casa.mp4"},
    {t:"Beleza e Cuidados",u:"videos/beleza.mp4"},
    {t:"Cozinha e Utilidades",u:"videos/cozinha.mp4"},
    {t:"Eletros e Tecnologia",u:"videos/eletro.mp4"},
    {t:"Moda e Estilo",u:"videos/moda.mp4"},
    {t:"Universo Pet",u:"videos/pet.mp4"}],
  /* Links originais do Google Drive (backup):
     principal = 1n7n6nESex4WGNTrQ6TQrlCdEvb_78P4V
     casa      = 16sYMvj4kFgmgB7GdShIiHuEQeNd0au7Z
     beleza    = 1zwpCI6allzaGmTvtTnpYuTJgPDCD3cwi
     cozinha   = 1AEiVIJZaDTrSHTf5IOeb10i_x5kSCMbX
     eletro    = 1kB8KzZQ6KJl6NZ3aHNp_a58LoZORQ9Cf
     moda      = 1S_irevlyYNxOm0LgQlc7BS0QnVAokFlg
     pet       = 1iMkpPs9HkjWzaecGmAxwKFy4FpBS-m56 */
  VIDEO_COUNT:"2.000",              // somente o número REAL
  META_PIXEL_ID:"",                 // ex.: "123456789012345"
  NICHES:[["🏠","Achadinhos para Casa"],["👶","Mamãe & Bebê"],["🐾","Universo Pet"],["👗","Moda & Estilo"],["📚","Papelaria & Estudos"],["🧼","Limpeza & Organização"],["💄","Beleza & Cuidados"],["🎧","Eletros & Tecnologia"],["🧸","Brinquedos"],["🍳","Cozinha & Utilidades"],["💪","Fitness"],["👜","Acessórios"]],
  GIFTS:[
    {i:"🤖",t:"Pack de Prompts para Vídeos Virais",d:"Prompts para criar vídeos de produtos com inteligência artificial. Adapte os comandos aos seus produtos.",b:["Ideias para anúncios de produtos","Prompts para ferramentas de IA","Formatos de vídeos verticais","Material digital para consulta"]},
    {i:"🎣",t:"Pack de Ganchos e Legendas Persuasivas",d:"Chamadas que despertam curiosidade e legendas para apresentar produtos de forma mais envolvente.",b:["Ideias para os primeiros segundos","Chamadas para despertar interesse","Legendas adaptáveis","Sugestões de chamada para ação"]},
    {i:"📅",t:"Calendário Estratégico de Postagens",d:"Organize sua rotina de publicações e planeje conteúdos para diferentes redes.",b:["Planejamento de postagens","Organização da rotina","Ideias de conteúdos","Instagram, TikTok, Shorts e Telegram"]}],
  FAQ:[
    ["O que é o Pack Premium?","É uma biblioteca privada de vídeos de produtos, organizada por categorias dentro do Telegram."],
    ["Como recebo meu acesso?","Após a confirmação da compra, você recebe as instruções para entrar no grupo privado."],
    ["Preciso ter experiência como afiliado?","Não. A organização por nichos facilita a navegação mesmo para quem está começando."],
    ["Serve para Shopee, Mercado Livre e TikTok?","Os vídeos são de produtos e podem ser usados na preparação de conteúdo para diferentes redes. Siga sempre as regras de cada plataforma e do seu programa de afiliados. Dica: o TikTok costuma penalizar conteúdo repetido, então personalize seus vídeos (legenda, corte, áudio)."],
    ["Os vídeos são separados por nichos?","Sim. A biblioteca tem 12 categorias organizadas."],
    ["O Pack recebe atualizações?","Sim, há um processo de atualização periódica. A frequência e a disponibilidade de novos materiais podem variar."],
    ["Os brindes estão inclusos?","Sim. Os materiais digitais apresentados na oferta acompanham o Pack Premium."],
    ["Posso usar os vídeos nas minhas divulgações?","O uso depende das permissões e licenças de cada conteúdo e deve respeitar as regras das plataformas. Não há direito de revenda ou redistribuição."],
    ["O Pack garante vendas?","Não. O produto facilita o acesso e a organização dos conteúdos, mas não garante vendas ou resultados financeiros."],
    ["Por quanto tempo terei acesso?",null]]
};
/* ========================================================= */
