const Product = require("../models/Product")

async function seedDatabase() {
    if (await Product.count() === 0){
        await Product.bulkCreate(productList)
    }
}

module.exports = { seedDatabase };

const productList = [
  {
    "id": "a1b2c3d4-0001-4001-a001-567890abcdef",
    "nome": "Notebook Gamer Legion",
    "descricao": "Notebook para jogos com processador de última geração e 16GB RAM.",
    "preco": 7500.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Notebook+Gamer",
    "quantidade_em_stock": 15
  },
  {
    "id": "a1b2c3d4-0002-4002-a002-567890abcdef",
    "nome": "Smartphone Galaxy Pro",
    "descricao": "Smartphone com câmera de 108MP e tela AMOLED de 120Hz.",
    "preco": 4200.50,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Smartphone",
    "quantidade_em_stock": 30
  },
  {
    "id": "a1b2c3d4-0003-4003-a003-567890abcdef",
    "nome": "Headset HyperSonic",
    "descricao": "Cancelamento de ruído e alta fidelidade sonora para gamers.",
    "preco": 899.90,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Headset",
    "quantidade_em_stock": 50
  },
  {
    "id": "a1b2c3d4-0004-4004-a004-567890abcdef",
    "nome": "Monitor Gamer 4K 27\"",
    "descricao": "Monitor de 27 polegadas com taxa de atualização de 144Hz.",
    "preco": 2500.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Monitor+4K",
    "quantidade_em_stock": 20
  },
  {
    "id": "a1b2c3d4-0005-4005-a005-567890abcdef",
    "nome": "Teclado Mecânico RGB",
    "descricao": "Teclado com switches blue e iluminação customizável.",
    "preco": 450.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Teclado",
    "quantidade_em_stock": 40
  },
  {
    "id": "a1b2c3d4-0006-4006-a006-567890abcdef",
    "nome": "Mouse Gamer Precision",
    "descricao": "Mouse com 16000 DPI e 8 botões programáveis.",
    "preco": 350.75,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Mouse+Gamer",
    "quantidade_em_stock": 60
  },
  {
    "id": "a1b2c3d4-0007-4007-a007-567890abcdef",
    "nome": "Cadeira Gamer ErgoPro",
    "descricao": "Cadeira ergonômica com suporte lombar ajustável.",
    "preco": 1800.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Cadeira+Gamer",
    "quantidade_em_stock": 12
  },
  {
    "id": "a1b2c3d4-0008-4008-a008-567890abcdef",
    "nome": "Webcam Full HD Pro",
    "descricao": "Webcam 1080p para streaming e videoconferências.",
    "preco": 280.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Webcam",
    "quantidade_em_stock": 35
  },
  {
    "id": "a1b2c3d4-0009-4009-a009-567890abcdef",
    "nome": "SSD NVMe 1TB",
    "descricao": "Unidade de estado sólido com velocidades de leitura de 3500MB/s.",
    "preco": 650.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=SSD+1TB",
    "quantidade_em_stock": 28
  },
  {
    "id": "a1b2c3d4-0010-4010-a010-567890abcdef",
    "nome": "Placa de Vídeo RTX 4070",
    "descricao": "Placa de vídeo com 12GB de VRAM para jogos em 4K.",
    "preco": 4500.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=RTX+4070",
    "quantidade_em_stock": 8
  },
  {
    "id": "a1b2c3d4-0011-4011-a011-567890abcdef",
    "nome": "Notebook SlimBook Air",
    "descricao": "Ultrafino e leve, ideal para trabalho e estudos.",
    "preco": 5200.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Notebook+Slim",
    "quantidade_em_stock": 22
  },
  {
    "id": "a1b2c3d4-0012-4012-a012-567890abcdef",
    "nome": "Tablet Android 11\"",
    "descricao": "Tablet com tela de alta resolução e caneta stylus inclusa.",
    "preco": 1950.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Tablet",
    "quantidade_em_stock": 18
  },
  {
    "id": "a1b2c3d4-0013-4013-a013-567890abcdef",
    "nome": "Smartwatch Fit Pro",
    "descricao": "Relógio inteligente com monitoramento de saúde e GPS.",
    "preco": 950.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Smartwatch",
    "quantidade_em_stock": 45
  },
  {
    "id": "a1b2c3d4-0014-4014-a014-567890abcdef",
    "nome": "Monitor Ultrawide 34\"",
    "descricao": "Monitor curvo para máxima produtividade e imersão.",
    "preco": 3100.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Monitor+Ultrawide",
    "quantidade_em_stock": 14
  },
  {
    "id": "a1b2c3d4-0015-4015-a015-567890abcdef",
    "nome": "Teclado Sem Fio Compacto",
    "descricao": "Teclado minimalista para setups limpos e modernos.",
    "preco": 320.50,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Teclado+Compacto",
    "quantidade_em_stock": 33
  },
  {
    "id": "a1b2c3d4-0016-4016-a016-567890abcdef",
    "nome": "Mouse Ergonômico Vertical",
    "descricao": "Design vertical para previnir lesões por esforço repetitivo.",
    "preco": 290.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Mouse+Vertical",
    "quantidade_em_stock": 25
  },
  {
    "id": "a1b2c3d4-0017-4017-a017-567890abcdef",
    "nome": "Microfone Condensador USB",
    "descricao": "Microfone de alta qualidade para podcasts e gravações.",
    "preco": 550.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Microfone",
    "quantidade_em_stock": 19
  },
  {
    "id": "a1b2c3d4-0018-4018-a018-567890abcdef",
    "nome": "HD Externo 4TB",
    "descricao": "Armazenamento portátil de alta capacidade com conexão USB 3.0.",
    "preco": 700.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=HD+Externo",
    "quantidade_em_stock": 55
  },
  {
    "id": "a1b2c3d4-0019-4019-a019-567890abcdef",
    "nome": "Roteador Wi-Fi 6 Mesh",
    "descricao": "Sistema de rede mesh para cobertura total da casa.",
    "preco": 1200.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Roteador+Mesh",
    "quantidade_em_stock": 21
  },
  {
    "id": "a1b2c3d4-0020-4020-a020-567890abcdef",
    "nome": "Impressora Multifuncional",
    "descricao": "Impressora a laser com scanner e copiadora.",
    "preco": 1500.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Impressora",
    "quantidade_em_stock": 17
  },
  {
    "id": "a1b2c3d4-0021-4021-a021-567890abcdef",
    "nome": "Caixa de Som Bluetooth",
    "descricao": "Caixa de som portátil à prova d´água com graves potentes.",
    "preco": 400.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Caixa+Bluetooth",
    "quantidade_em_stock": 70
  },
  {
    "id": "a1b2c3d4-0022-4022-a022-567890abcdef",
    "nome": "Projetor 4K Home Cinema",
    "descricao": "Projetor com resolução nativa 4K e alto brilho.",
    "preco": 3800.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Projetor",
    "quantidade_em_stock": 9
  },
  {
    "id": "a1b2c3d4-0023-4023-a023-567890abcdef",
    "nome": "Leitor de E-book Paperlight",
    "descricao": "Tela anti-reflexo e iluminação embutida para leitura confortável.",
    "preco": 600.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=E-book+Reader",
    "quantidade_em_stock": 48
  },
  {
    "id": "a1b2c3d4-0024-4024-a024-567890abcdef",
    "nome": "Drone com Câmera 4K",
    "descricao": "Drone compacto e dobrável para capturas aéreas incríveis.",
    "preco": 2900.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Drone",
    "quantidade_em_stock": 11
  },
  {
    "id": "a1b2c3d4-0025-4025-a025-567890abcdef",
    "nome": "Mesa Digitalizadora Pro",
    "descricao": "Mesa para desenho digital com caneta de alta sensibilidade.",
    "preco": 850.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Mesa+Digital",
    "quantidade_em_stock": 23
  },
  {
    "id": "a1b2c3d4-0026-4026-a026-567890abcdef",
    "nome": "Placa Mãe Z790 Pro",
    "descricao": "Placa mãe para processadores de última geração com Wi-Fi integrado.",
    "preco": 2100.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Placa+Mae",
    "quantidade_em_stock": 16
  },
  {
    "id": "a1b2c3d4-0027-4027-a027-567890abcdef",
    "nome": "Memória RAM 32GB Kit",
    "descricao": "Kit com 2 pentes de 16GB DDR5 para máxima performance.",
    "preco": 900.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Memoria+RAM",
    "quantidade_em_stock": 38
  },
  {
    "id": "a1b2c3d4-0028-4028-a028-567890abcdef",
    "nome": "Fonte de Alimentação 850W",
    "descricao": "Fonte modular com certificação Gold para PCs de alto desempenho.",
    "preco": 850.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Fonte+PC",
    "quantidade_em_stock": 26
  },
  {
    "id": "a1b2c3d4-0029-4029-a029-567890abcdef",
    "nome": "Gabinete Gamer Mid-Tower",
    "descricao": "Gabinete com painel de vidro temperado e excelente fluxo de ar.",
    "preco": 600.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Gabinete",
    "quantidade_em_stock": 13
  },
  {
    "id": "a1b2c3d4-0030-4030-a030-567890abcdef",
    "nome": "Water Cooler 240mm",
    "descricao": "Sistema de refrigeração líquida com fans RGB.",
    "preco": 750.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Water+Cooler",
    "quantidade_em_stock": 24
  },
  {
    "id": "a1b2c3d4-0031-4031-a031-567890abcdef",
    "nome": "Pen Drive 256GB USB-C",
    "descricao": "Pen drive de alta velocidade com conector USB-C.",
    "preco": 180.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Pen+Drive",
    "quantidade_em_stock": 80
  },
  {
    "id": "a1b2c3d4-0032-4032-a032-567890abcdef",
    "nome": "Cartão de Memória 512GB",
    "descricao": "Cartão SD de alta performance para câmeras e drones.",
    "preco": 350.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Cartao+SD",
    "quantidade_em_stock": 65
  },
  {
    "id": "a1b2c3d4-0033-4033-a033-567890abcdef",
    "nome": "Óculos de Realidade Virtual",
    "descricao": "Imersão total em jogos e experiências VR.",
    "preco": 2200.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Oculos+VR",
    "quantidade_em_stock": 7
  },
  {
    "id": "a1b2c3d4-0034-4034-a034-567890abcdef",
    "nome": "Volante Gamer Force Feedback",
    "descricao": "Volante com pedais e sistema force feedback para simuladores.",
    "preco": 1600.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Volante+Gamer",
    "quantidade_em_stock": 10
  },
  {
    "id": "a1b2c3d4-0035-4035-a035-567890abcdef",
    "nome": "Filtro de Linha Inteligente",
    "descricao": "Régua de tomadas com proteção e controle via Wi-Fi.",
    "preco": 150.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Filtro+de+Linha",
    "quantidade_em_stock": 90
  },
  {
    "id": "a1b2c3d4-0036-4036-a036-567890abcdef",
    "nome": "Lâmpada Inteligente RGB",
    "descricao": "Lâmpada LED com cores customizáveis e controle por app.",
    "preco": 80.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Lampada+Smart",
    "quantidade_em_stock": 120
  },
  {
    "id": "a1b2c3d4-0037-4037-a037-567890abcdef",
    "nome": "Assistente Virtual Doméstico",
    "descricao": "Smart speaker com assistente de voz para automação residencial.",
    "preco": 300.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Assistente",
    "quantidade_em_stock": 42
  },
  {
    "id": "a1b2c3d4-0038-4038-a038-567890abcdef",
    "nome": "Câmera de Segurança Wi-Fi",
    "descricao": "Câmera IP com visão noturna e detecção de movimento.",
    "preco": 250.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Camera+IP",
    "quantidade_em_stock": 36
  },
  {
    "id": "a1b2c3d4-0039-4039-a039-567890abcdef",
    "nome": "Nobreak 1200VA",
    "descricao": "Proteção contra quedas de energia para seus eletrônicos.",
    "preco": 580.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Nobreak",
    "quantidade_em_stock": 18
  },
  {
    "id": "a1b2c3d4-0040-4040-a040-567890abcdef",
    "nome": "Mochila para Notebook 15\"",
    "descricao": "Mochila reforçada e à prova d´água para transportar seu notebook.",
    "preco": 220.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Mochila",
    "quantidade_em_stock": 58
  },
  {
    "id": "a1b2c3d4-0041-4041-a041-567890abcdef",
    "nome": "Placa de Captura 4K",
    "descricao": "Placa para streaming de consoles e câmeras em alta definição.",
    "preco": 950.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Placa+Captura",
    "quantidade_em_stock": 15
  },
  {
    "id": "a1b2c3d4-0042-4042-a042-567890abcdef",
    "nome": "Chromebook 2 em 1",
    "descricao": "Notebook conversível com sistema ChromeOS, rápido e seguro.",
    "preco": 2300.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Chromebook",
    "quantidade_em_stock": 20
  },
  {
    "id": "a1b2c3d4-0043-4043-a043-567890abcdef",
    "nome": "Apple TV 4K",
    "descricao": "Media center para streaming de filmes e séries em 4K HDR.",
    "preco": 1100.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Apple+TV",
    "quantidade_em_stock": 28
  },
  {
    "id": "a1b2c3d4-0044-4044-a044-567890abcdef",
    "nome": "Soundbar 5.1 Dolby Atmos",
    "descricao": "Sistema de som para TV com subwoofer sem fio.",
    "preco": 2800.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Soundbar",
    "quantidade_em_stock": 12
  },
  {
    "id": "a1b2c3d4-0045-4045-a045-567890abcdef",
    "nome": "Controle Gamer Elite",
    "descricao": "Controle sem fio com componentes customizáveis.",
    "preco": 800.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Controle+Elite",
    "quantidade_em_stock": 32
  },
  {
    "id": "a1b2c3d4-0046-4046-a046-567890abcdef",
    "nome": "Carregador Portátil 20000mAh",
    "descricao": "Power bank de alta capacidade para carregar múltiplos dispositivos.",
    "preco": 250.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Power+Bank",
    "quantidade_em_stock": 68
  },
  {
    "id": "a1b2c3d4-0047-4047-a047-567890abcdef",
    "nome": "Dock Station USB-C",
    "descricao": "Hub com múltiplas portas para expandir a conectividade do notebook.",
    "preco": 450.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Dock+Station",
    "quantidade_em_stock": 29
  },
  {
    "id": "a1b2c3d4-0048-4048-a048-567890abcdef",
    "nome": "Mousepad Gamer XXL",
    "descricao": "Mousepad gigante para teclado e mouse, com bordas costuradas.",
    "preco": 120.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Mousepad",
    "quantidade_em_stock": 95
  },
  {
    "id": "a1b2c3d4-0049-4049-a049-567890abcdef",
    "nome": "Suporte Articulado para Monitor",
    "descricao": "Suporte para monitor com pistão a gás para ajuste de altura e posição.",
    "preco": 380.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Suporte+Monitor",
    "quantidade_em_stock": 31
  },
  {
    "id": "a1b2c3d4-0050-4050-a050-567890abcdef",
    "nome": "Placa de Som Externa 7.1",
    "descricao": "Placa de som USB para áudio surround em fones de ouvido.",
    "preco": 290.00,
    "url_imagem": "https://placehold.co/600x400/EEE/31343C?text=Placa+de+Som",
    "quantidade_em_stock": 27
  }
]