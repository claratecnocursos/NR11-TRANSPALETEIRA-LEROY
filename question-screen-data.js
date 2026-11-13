/**
 * Conteúdo da Trilha NR-11 — Transpaleteira
 * Tipos: cover | content | compare | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR-11 — Transpaleteira",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos Legais, Requisitos do Operador e EPIs",
      objective: "Conhecer a base jurídica da NR-11, as regras de habilitação e autorização do operador e o uso obrigatório dos EPIs.",
      titleUnlock: {
        title: "BASE DA NR-11",
        body: "Você acompanha a validade da autorização e usa os EPIs certos para prevenir lesões.",
        icon: "📘"
      },
      screens: [
        {
          id: "nr11-m1-cover",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Transpaleteira elétrica em um corredor de galpão, entre estantes de paletes",
          title: "Módulo 1 — Fundamentos legais, requisitos do operador e EPIs",
          subtitle: "Legislação da NR-11, habilitação, validade do cartão, proibição do modo embarcado e EPIs obrigatórios."
        },
        {
          id: "nr11-m1-video-apresentacao",
          type: "video",
          kicker: "Vídeo",
          title: "Apresentação do Curso, Legislação (NR 11) e Sinalização de Carga",
          playerId: "panda-1123742e-999a-48a4-a4ba-9b45d55c287f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=1123742e-999a-48a4-a4ba-9b45d55c287f"
        },
        {
          id: "nr11-m1-lei",
          type: "content",
          fit: true,
          kicker: "Legislação",
          eyebrow: "Legislação",
          title: "O que a NR-11 Exige neste Treinamento",
          titleAccent: "NR-11",
          body: "A operação da transpaleteira segue estes subitens. Cada um gera uma obrigação prática no turno.",
          cards: [
            { icon: "📘", title: "Item 11.1", body: "A NR-11 trata do transporte, da movimentação, da armazenagem e do manuseio de materiais." },
            { icon: "⚖️", title: "Item 11.1.3.2", body: "Todo equipamento indica, em lugar visível, a carga máxima de trabalho. Esse limite não se ultrapassa." },
            { icon: "🎓", title: "Item 11.1.5", body: "O operador só é habilitado depois do treinamento específico dado pela empresa, teórico e prático." },
            { icon: "🪪", title: "Item 11.1.6", body: "Durante o horário de trabalho, o operador porta o cartão de identificação, com nome e fotografia, em lugar visível." },
            { icon: "📅", title: "Item 11.1.6.1", body: "O cartão vale 1 ano. A revalidação exige exame de saúde completo, por conta do empregador." }
          ]
        },
        {
          id: "nr11-m1-video-requisitos",
          type: "video",
          kicker: "Vídeo",
          title: "Requisitos do Operador, Cartão de Identificação e Proibição do Modo Embarcado",
          playerId: "panda-adcc4944-9a24-4021-8e21-618bb2579a4c",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=adcc4944-9a24-4021-8e21-618bb2579a4c"
        },
        {
          id: "nr11-m1-cartao-conteudo",
          type: "content",
          layout: "idcard",
          kicker: "Legislação",
          eyebrow: "Legislação",
          title: "O Cartão de Identificação",
          titleAccent: "Identificação",
          badge: "ITEM 11.1.6 (NR-11)",
          quote: "Os operadores de equipamentos de transporte motorizado deverão ser habilitados e só poderão dirigir se durante o horário de trabalho portarem um cartão de identificação, com o nome e fotografia, em lugar visível.",
          emphasis: ["cartão de identificação", "nome", "fotografia"],
          image: "assets/fotos/3x4.png",
          imageAlt: "Foto de Jose Carlos no cartão de operador autorizado, chapa 23078, setor Expedição",
          logo: "assets/fotos/logo-cartao.png",
          card: {
            role: "Operador Autorizado",
            name: "Jose Carlos",
            fields: [
              { label: "Chapa", value: "23078" },
              { label: "Setor", value: "Expedição" }
            ]
          }
        },
        {
          id: "nr11-m1-habilitacao",
          type: "content",
          fit: true,
          kicker: "Habilitação",
          eyebrow: "Habilitação",
          title: "Quem Pode Operar",
          titleAccent: "Pode Operar",
          body: "Sem estes quatro pontos em dia, a operação fica suspensa.",
          cards: [
            { icon: "1", title: "Treinamento teórico e prático", body: "A habilitação exige aproveitamento no treinamento específico da empresa, na teoria e na prática do equipamento." },
            { icon: "2", title: "Cartão válido por 1 ano", body: "A carteirinha, com foto e nome, vale 1 ano. O próprio operador acompanha o vencimento e avisa a chefia." },
            { icon: "3", title: "Renovação com ASO", body: "A renovação depende do Exame Médico de Saúde Ocupacional. O exame é custeado pelo empregador." },
            { icon: "4", title: "Reciclagem anual", body: "A reciclagem é obrigatória todo ano, para renovar as orientações de segurança e as competências da função." }
          ],
          note: { label: "Atenção", text: "Cartão vencido, ASO pendente ou reciclagem em atraso impedem a condução da transpaleteira." }
        },
        {
          id: "nr11-m1-video-epi",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Individual (EPI) Obrigatórios",
          playerId: "panda-a8c65a57-07c7-4362-b405-d30ce25e1344",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=a8c65a57-07c7-4362-b405-d30ce25e1344"
        },
        {
          id: "nr11-m1-epis",
          type: "content",
          layout: "side",
          fit: true,
          eyebrow: "EPI",
          title: "EPIs Obrigatórios da Operação",
          titleAccent: "Obrigatórios da Operação",
          image: "assets/fotos/epis.jpeg",
          imageAlt: "Botina, capacete, luvas, óculos e protetor auricular sobre a bancada",
          body: "A empresa fornece, orienta e exige o uso. O colaborador usa e conserva cada EPI. Sem o conjunto completo, a operação não começa.",
          cards: [
            { icon: "🧤", title: "Luvas tricotadas", body: "Luvas de segurança tricotadas, como a Opti-Grip, para o manuseio do timão, dos cabos e da carga." },
            { icon: "⛑️", title: "Capacete com jugular", body: "Capacete de segurança com jugular ajustada. O capacete só protege se permanecer na cabeça." },
            { icon: "👢", title: "Botina de segurança", body: "Botina de segurança contra impacto e esmagamento dos pés na movimentação de paletes." }
          ],
          note: { label: "Dever dos dois lados", text: "A empresa cobra o uso. O colaborador não retira, não empresta danificado e pede a troca quando o EPI perde a proteção." }
        },
        {
          id: "nr11-m1-desafio",
          type: "quiz-intro",
          title: "Pode operar?",
          body: "Quatro perguntas da NR-11, da autorização e dos EPIs. Acerte no mínimo <strong>3</strong> de <strong>4</strong> para concluir o módulo.",
          count: 4,
          minCorrect: 3,
          icon: "🎯"
        },
        {
          id: "nr11-m1-q1",
          type: "question",
          icon: "⚖️",
          image: "assets/fotos/m1i1.png",
          imageAlt: "Operadora conduzindo uma transpaleteira elétrica com um palete de caixas no corredor do galpão",
          question: "De acordo com o item 11.1.3.2 da NR-11, o que deve estar indicado de forma visível em todo equipamento?",
          alternatives: [
            { id: "a", text: "A data do próximo exame médico obrigatório do operador.", correct: false },
            { id: "b", text: "A carga máxima de trabalho permitida, limite que nunca deve ser ultrapassado.", correct: true },
            { id: "c", text: "O nome completo do fabricante e a cor da máquina.", correct: false }
          ],
          explanation: "O item 11.1.3.2 exige a carga máxima de trabalho em lugar visível. Esse limite não pode ser ultrapassado.",
          review: "Carga máxima visível"
        },
        {
          id: "nr11-m1-q2",
          type: "question",
          icon: "🪪",
          image: "assets/fotos/m1i2.png",
          imageAlt: "Operadora mostra o crachá com foto, com a transpaleteira ao fundo no galpão",
          question: "Para dirigir a transpaleteira durante todo o horário de trabalho, qual é a exigência do item 11.1.6?",
          alternatives: [
            { id: "a", text: "Portar o cartão de identificação com nome e foto em local bem visível.", correct: true },
            { id: "b", text: "Guardar a autorização física dentro da carteira pessoal, no bolso.", correct: false },
            { id: "c", text: "Exibir a autorização digital apenas quando a fiscalização pedir.", correct: false }
          ],
          explanation: "O item 11.1.6 exige o cartão de identificação, com nome e fotografia, em lugar visível durante o horário de trabalho.",
          review: "Cartão visível"
        },
        {
          id: "nr11-m1-q3",
          type: "question",
          icon: "📅",
          image: "assets/fotos/m1i3.png",
          imageAlt: "Operadora confere no computador o crachá, o calendário e o checklist, com a transpaleteira ao lado",
          question: "Qual é a regra de validade da autorização e da renovação?",
          alternatives: [
            { id: "a", text: "A validade é vitalícia e não depende de exame nem de acompanhamento.", correct: false },
            { id: "b", text: "Vale 1 ano. A renovação depende do ASO custeado pelo empregador, e o operador acompanha o vencimento.", correct: true },
            { id: "c", text: "Vale 3 anos e só o RH precisa saber a data, sem reciclagem anual.", correct: false }
          ],
          explanation: "O cartão vale 1 ano. A renovação segue o ASO, pago pelo empregador. O operador controla o vencimento, e a reciclagem é anual.",
          review: "Validade de 1 ano"
        },
        {
          id: "nr11-m1-p4",
          type: "question",
          icon: "🦺",
          image: "assets/fotos/epis.jpeg",
          imageAlt: "EPIs de operação: botina, capacete e luvas",
          question: "Sobre o modo embarcado e os EPIs desta operação, o que está correto?",
          alternatives: [
            { id: "a", text: "O modo embarcado é permitido em trajeto longo, e o EPI fica a critério do operador.", correct: false },
            { id: "b", text: "O modo embarcado é proibido. São obrigatórios luvas tricotadas, capacete com jugular e botina: a empresa fornece e exige, o colaborador usa e conserva.", correct: true },
            { id: "c", text: "Pode subir na plataforma se a botina estiver calçada e o capacete estiver no armário.", correct: false }
          ],
          explanation: "Operar embarcado é proibido. Os EPIs obrigatórios são luvas tricotadas, capacete com jugular e botina. A empresa fornece, orienta e exige. O colaborador usa e conserva.",
          review: "Sem embarcado, com EPI"
        }
      ]
    },
    {
      id: 2,
      title: "Reconhecimento Técnico dos Equipamentos e Comandos",
      objective: "Identificar a frota, localizar os componentes da Still EGU 20C e da Still ECH 12 e acionar o freio pela posição do timão.",
      titleUnlock: {
        title: "A MÁQUINA",
        body: "Você nomeia cada componente e freia pelo timão, sem usar o reverso como freio.",
        icon: "⚙️"
      },
      screens: [
        {
          id: "nr11-m2-cover",
          type: "cover",
          icon: "⚙️",
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Operadora com capacete e colete ao lado de uma transpaleteira elétrica, em um corredor de galpão com estantes de paletes",
          title: "Módulo 2 — Reconhecimento técnico dos equipamentos e comandos",
          subtitle: "Frota Still EGU 20C, Still ECH 12 e paleteira manual, painel, horímetro, timão e freio."
        },
        {
          id: "nr11-m2-video-frota",
          type: "video",
          kicker: "Vídeo",
          title: "Apresentação da Frota: Transpaleteiras e Paleteiras",
          playerId: "panda-4471b3e1-da44-4685-bb4e-8ea432f18b04",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4471b3e1-da44-4685-bb4e-8ea432f18b04"
        },
        {
          id: "nr11-m2-frota-egu",
          type: "content",
          layout: "figure",
          wide: true,
          eyebrow: "Frota",
          title: "Transpaleteira Still EGU 20C",
          titleAccent: "Still EGU 20C",
          body: "Toque na imagem para ampliar e ler cada componente. Operação a pé — modo embarcado proibido.",
          image: "assets/fotos/Infográfico da Transpaleteira Still EGU 20C.png",
          imageAlt: "Infográfico da Transpaleteira Still EGU 20C com os componentes numerados"
        },
        {
          id: "nr11-m2-frota-ech",
          type: "content",
          layout: "figure",
          wide: true,
          eyebrow: "Frota",
          title: "Paleteira Elétrica Still ECH 12",
          titleAccent: "Still ECH 12",
          body: "Toque na imagem para ampliar e ler cada componente. Operação a pé — modo embarcado proibido.",
          image: "assets/fotos/Infográfico da Paleteira Elétrica Still ECH 12.png",
          imageAlt: "Infográfico da Paleteira Elétrica Still ECH 12 com os componentes numerados"
        },
        {
          id: "nr11-m2-video-timao",
          type: "video",
          kicker: "Vídeo",
          title: "Comandos do Timão, Mecânica do Freio e Alerta do Botão Reverso",
          playerId: "panda-8e67b6b8-bcac-45dd-9ce9-f9ea989218e6",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8e67b6b8-bcac-45dd-9ce9-f9ea989218e6"
        },
        {
          id: "nr11-m2-timao-comandos",
          type: "content",
          layout: "figure",
          wide: true,
          eyebrow: "Timão",
          title: "O Timão e os Comandos de Direção",
          titleAccent: "Comandos de Direção",
          body: "No timão estão a buzina, a elevação, a descida e o acelerador. O freio não é o reverso: ele depende da posição do braço.",
          image: "assets/fotos/TIMAO.png",
          imageAlt: "Timão da transpaleteira com os comandos de subida, descida, buzina e acelerador. O freio é pela posição do braço, não pelo reverso."
        },
        {
          id: "nr11-m2-freio-posicao",
          type: "content",
          pair: true,
          eyebrow: "Freios",
          title: "O Freio pela Posição do Timão",
          titleAccent: "Posição do Timão",
          images: [
            {
              image: "assets/fotos/VERTICAL.png",
              imageAlt: "Timão na posição vertical superior, com o freio acionado",
              caption: "Vertical superior: freio acionado"
            },
            {
              image: "assets/fotos/HORIZONTAL.png",
              imageAlt: "Timão na posição extrema horizontal, com o freio acionado",
              caption: "Extrema horizontal: freio acionado"
            }
          ],
          note: {
            alert: true,
            label: "Alerta",
            text: "O freio atua com o braço do timão na vertical superior e na posição extrema horizontal. É proibido usar o reverso ou o pulsar para frear. Esse hábito danifica o sistema e pode tombar a carga."
          }
        },
        {
          id: "nr11-m2-quiz",
          type: "quiz-intro",
          title: "Verdadeiro ou falso?",
          body: "Quatro afirmações sobre a frota, o painel e o freio. Acerte no mínimo <strong>3</strong> de <strong>4</strong> para concluir o módulo.",
          count: 4,
          minCorrect: 3,
          icon: "✓"
        },
        {
          id: "nr11-m2-vf1",
          type: "question",
          tf: true,
          question: "A frota da unidade tem a Still EGU 20C, a Still ECH 12 (JET) e a paleteira manual hidráulica. As elétricas fazem movimentação horizontal, com capacidade técnica de 1.800 a 2.000 kg e estabilidade em 5 pontos de apoio.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: true },
            { id: "f", text: "Falso", correct: false }
          ],
          explanation: "São esses três modelos. As elétricas movem a carga na horizontal, com 1.800 a 2.000 kg e cinco pontos de apoio, incluindo as rodas estabilizadoras.",
          review: "Frota e capacidade"
        },
        {
          id: "nr11-m2-vf2",
          type: "question",
          tf: true,
          question: "Na paleteira manual, o certo é puxar o equipamento e frear colocando o pé na roda, em velocidade acima da caminhada.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: false },
            { id: "f", text: "Falso", correct: true }
          ],
          explanation: "A regra é empurrar, não puxar. A velocidade é a de caminhada normal. Não se freia com o pé na roda nem se faz parada brusca.",
          review: "Empurrar a manual"
        },
        {
          id: "nr11-m2-vf3",
          type: "question",
          tf: true,
          question: "A chave de contato imobiliza o circuito elétrico e deve ser desligada ao se afastar. Quando o LED da bateria chega a 20% e pisca, a elevação dos garfos é bloqueada automaticamente.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: true },
            { id: "f", text: "Falso", correct: false }
          ],
          explanation: "A chave fica no painel ou no timão e corta a energia ao sair. Em 20% de carga, o LED pisca e a elevação trava por segurança.",
          review: "Chave e bateria a 20%"
        },
        {
          id: "nr11-m2-vf4",
          type: "question",
          tf: true,
          question: "O freio atua com o timão na vertical superior ou na horizontal extrema. O botão de pulsar/reverso pode ser usado para frear a máquina.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: false },
            { id: "f", text: "Falso", correct: true }
          ],
          explanation: "A primeira parte está certa: o freio é pela posição do braço. A segunda está errada: o pulsar jamais serve de freio. Freia-se só com o timão.",
          review: "Freio sem pulsar"
        }
      ]
    },
    {
      id: 3,
      title: "Operação Segura, Movimentação de Cargas e Inspeção",
      objective: "Circular a no máximo 6 km/h, estabilizar a carga até 1.500 kg e fazer o checklist diário antes de operar.",
      titleUnlock: {
        title: "OPERAÇÃO SEGURA",
        body: "Você respeita o trânsito da unidade, estabiliza a carga e não opera equipamento não conforme.",
        icon: "🎛️"
      },
      screens: [
        {
          id: "nr11-m3-cover",
          type: "cover",
          icon: "🎛️",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Operadora com capacete e colete em um corredor de galpão, com a transpaleteira elétrica ao lado e estantes de paletes",
          title: "Módulo 3 — Operação segura, movimentação de cargas e inspeção",
          subtitle: "Trânsito a 6 km/h, rampas, paleteira manual, limite de 1.500 kg e checklist pré-operacional."
        },
        {
          id: "nr11-m3-video-transito",
          type: "video",
          kicker: "Vídeo",
          title: "Regras de Trânsito Interno, Condução e Manobras em Rampas",
          playerId: "panda-ef5415a3-c2c9-4940-9972-d571f8565d01",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ef5415a3-c2c9-4940-9972-d571f8565d01"
        },
        {
          id: "nr11-m3-regras",
          type: "content",
          fit: true,
          eyebrow: "Trânsito",
          title: "Condução e Estacionamento Seguro",
          titleAccent: "Estacionamento Seguro",
          body: "Em Drive e Logística o limite é 6 km/h. Sem celular, sem costurar e sem chave na ignição ao se afastar.",
          cards: [
            { icon: "🚦", title: "Máximo de 6 km/h", body: "O limite é 6 km/h em Drive e em Logística. Curva, cruzamento e piso irregular pedem menos. Condução suave, sem arrancada nem freada brusca." },
            { icon: "🚶", title: "Cruzamentos e preferência", body: "Pare em todo cruzamento e conversão. Pedestres têm preferência absoluta. Ceda também a empilhadeiras e paleteiras carregadas. Nunca transite costurando entre obstáculos." },
            { icon: "📱", title: "Sem telefone celular", body: "É proibido usar telefone celular durante a operação. O celular reduz o foco e a atenção necessários para prevenir acidentes." },
            { icon: "🚫", title: "Sem carona nem escada", body: "Corpo sempre à frente do timão. É proibido dar carona, usar a máquina como escada e sentar na bateria." },
            { icon: "🅿️", title: "Estacione no local certo", body: "Estacione só em locais delimitados e permitidos. Ao se afastar, nunca deixe a chave na ignição." },
            { icon: "🛑", title: "Não obstrua a emergência", body: "É proibido estacionar bloqueando saídas de emergência, hidrantes, extintores, painéis elétricos, rotas de pedestres, ruas de acesso e prateleiras." }
          ]
        },
        {
          id: "nr11-m3-video-carga",
          type: "video",
          kicker: "Vídeo",
          title: "Manuseio de Cargas, Dispositivos de Apoio e Estabilização",
          playerId: "panda-0574d64c-6f69-47bc-b53d-56d98217fd30",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0574d64c-6f69-47bc-b53d-56d98217fd30"
        },
        {
          id: "nr11-m3-tipos-carga",
          type: "content",
          layout: "figure",
          wide: true,
          eyebrow: "Carga",
          title: "Classificação dos Tipos de Cargas",
          titleAccent: "Tipos de Cargas",
          body: "Toque na imagem para ampliar e conferir cada classificação.",
          image: "assets/fotos/Tipos de Cargas no Armazém.png",
          imageAlt: "Infográfico com a classificação dos tipos de cargas no armazém"
        },
        {
          id: "nr11-m3-paletes",
          type: "content",
          layout: "types",
          eyebrow: "Carga",
          title: "Dois Tipos de Palete",
          titleAccent: "Palete",
          body: "A diferença está no acesso dos garfos: dois lados ou quatro lados.",
          cards: [
            {
              title: "Palete de duas entradas",
              body: "Aberturas só em lados opostos. Os garfos entram por duas faces — acesso mais limitado.",
              image: "assets/fotos/PALLET DUAS.png",
              imageAlt: "Palete de duas entradas, com aberturas em lados opostos"
            },
            {
              title: "Palete de quatro entradas",
              body: "Aberturas nos quatro lados. Os garfos entram por qualquer face — mais versátil em corredores estreitos.",
              image: "assets/fotos/PALLET 4.webp",
              imageAlt: "Palete de quatro entradas, com aberturas nos quatro lados"
            }
          ]
        },
        {
          id: "nr11-m3-carga",
          type: "content",
          fit: true,
          eyebrow: "Armazenamento",
          title: "Armazenamento, Empilhamento e Transporte",
          titleAccent: "Empilhamento e Transporte",
          body: "Esses limites protegem o piso, as paredes e a estabilidade da máquina no deslocamento.",
          cards: [
            { icon: "🏗️", title: "Capacidade do piso", body: "O peso total dos materiais armazenados nunca pode ultrapassar a capacidade de carga estrutural do piso." },
            { icon: "📏", title: "Afastamento de 50 cm", body: "Todo material empilhado fica a pelo menos 50 cm das estruturas laterais do prédio e entre os corredores de circulação." },
            { icon: "📦", title: "No máximo 10 paletes vazios", body: "No empilhamento de paletes vazios para movimentação com a transpaleteira, o limite é de no máximo 10 paletes sobrepostos." },
            { icon: "↕️", title: "15 a 20 cm do chão", body: "Em terreno regular, a base inferior da carga fica a cerca de 15 a 20 cm do solo. Assim evita atrito e mantém a estabilidade." }
          ]
        },
        {
          id: "nr11-m3-video-checklist",
          type: "video",
          kicker: "Vídeo",
          title: "Checklist Pré-Operacional, Não Conformidades e Manutenção",
          playerId: "panda-2556739b-49fa-41b9-bc41-7a52b2ed01b1",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2556739b-49fa-41b9-bc41-7a52b2ed01b1"
        },
        {
          id: "nr11-m3-checklist",
          type: "content",
          fit: true,
          eyebrow: "Checklist",
          title: "Checklist do Início do Turno",
          titleAccent: "Início do Turno",
          body: "A inspeção é diária, antes da primeira movimentação. Item não conforme tira a máquina de circulação.",
          cards: [
            { icon: "🧹", title: "O que conferir", body: "Limpeza, placas de sinalização, trava da bateria e nível de carga. Sem esses itens conformes, não se liga para operar." },
            { icon: "📣", title: "Não conforme", body: "Comunique a chefia na hora e envie o equipamento para a manutenção. Não deixe para o fim do turno." },
            { icon: "🚫", title: "Não opere com defeito", body: "Freio, garfo, buzina, roda ou bateria com falha encerram a operação daquela máquina." },
            { icon: "🔧", title: "Sem reparo próprio", body: "O operador não conserta, não altera e não 'dá um jeito'. Reparo é da manutenção." }
          ],
          note: { alert: true, label: "Alerta", text: "Operar equipamento não conforme, ou reparar por conta própria, é proibido." }
        },
        {
          id: "nr11-m3-desafio",
          type: "quiz-intro",
          title: "Pode seguir?",
          body: "Quatro situações de trânsito, rampa, carga e checklist. Acerte no mínimo <strong>3</strong> de <strong>4</strong> para concluir o módulo.",
          count: 4,
          minCorrect: 3,
          icon: "🎯"
        },
        {
          id: "nr11-m3-p1",
          type: "question",
          icon: "🚦",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Corredor de operação com transpaleteira e pedestre na área",
          question: "Qual é o limite de velocidade em Drive e Logística, e quem tem a preferência no cruzamento?",
          alternatives: [
            { id: "a", text: "12 km/h, e a máquina carregada passa primeiro.", correct: false },
            { id: "b", text: "6 km/h. O pedestre tem preferência absoluta e a parada no cruzamento é obrigatória.", correct: true },
            { id: "c", text: "Não há limite, desde que a buzina fique ligada o tempo todo.", correct: false }
          ],
          explanation: "O máximo é 6 km/h em Drive e Logística. No cruzamento, pare. O pedestre passa primeiro. A buzina é pontual.",
          review: "6 km/h e pedestre"
        },
        {
          id: "nr11-m3-p2",
          type: "question",
          icon: "⛰️",
          image: "assets/fotos/HORIZONTAL.png",
          imageAlt: "Operação com o timão em posição de controle da máquina",
          question: "Como se conduz uma rampa, e como se move a paleteira manual?",
          alternatives: [
            { id: "a", text: "Sobe e desce de qualquer lado, e na manual é melhor puxar a carga.", correct: false },
            { id: "b", text: "Sobe com a carga à frente e desce em marcha reduzida com a carga atrás, sem curva nem parada na rampa. Na manual, empurra na velocidade de caminhada.", correct: true },
            { id: "c", text: "Pode estacionar no aclive se os garfos estiverem abaixados.", correct: false }
          ],
          explanation: "Subida com a carga à frente. Descida em marcha reduzida, com a carga atrás. Sem curva e sem estacionar na rampa. Na manual, empurre, sem parada brusca.",
          review: "Rampa e manual"
        },
        {
          id: "nr11-m3-p3",
          type: "question",
          icon: "📦",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Transpaleteira com palete no corredor de armazenagem",
          question: "Sobre armazenamento e transporte com a transpaleteira, o que está correto?",
          alternatives: [
            { id: "a", text: "Afastamento mínimo de 50 cm das paredes e corredores, no máximo 10 paletes vazios empilhados e carga a 15–20 cm do chão em terreno regular.", correct: true },
            { id: "b", text: "Pode ultrapassar a capacidade do piso se o trajeto for curto.", correct: false },
            { id: "c", text: "Paletes vazios podem ser empilhados sem limite, e a carga pode arrastar no chão.", correct: false }
          ],
          explanation: "O piso tem limite estrutural. O afastamento é de pelo menos 50 cm. No máximo 10 paletes vazios. Em terreno regular, a carga vai a 15–20 cm do solo.",
          review: "50 cm, 10 paletes, 15–20 cm"
        },
        {
          id: "nr11-m3-p4",
          type: "question",
          icon: "📋",
          image: "assets/fotos/m7i2.png",
          imageAlt: "Operadora confere o equipamento antes de usar",
          question: "No checklist, a trava da bateria está não conforme. O que você faz?",
          alternatives: [
            { id: "a", text: "Opera assim mesmo e avisa a chefia no fim do turno.", correct: false },
            { id: "b", text: "Aperta a trava por conta própria e segue, porque o reparo simples é do operador.", correct: false },
            { id: "c", text: "Não opera. Comunica a chefia e envia a máquina imediatamente para a manutenção.", correct: true }
          ],
          explanation: "Item não conforme tira o equipamento de uso. A chefia é avisada e a máquina vai para a manutenção. O operador não repara.",
          review: "Não conforme para a manutenção"
        }
      ]
    },
    {
      id: 4,
      title: "Substituição e Gestão de Baterias, Riscos e Prevenção de Acidentes",
      objective: "Trocar a bateria em dupla, cumprir o descanso e a água desmineralizada, e prevenir tombamento, colisão, atropelamento e queda de material.",
      titleUnlock: {
        title: "ENERGIA E PREVENÇÃO",
        body: "Você troca a bateria sem esmagar e sem curto, e trata o ácido e os riscos da operação com o procedimento certo.",
        icon: "🔋"
      },
      screens: [
        {
          id: "nr11-m4-capa",
          type: "cover",
          icon: "🔋",
          image: "assets/fotos/capa-modulo5.png",
          imageAlt: "Transpaleteira elétrica laranja em um corredor de galpão, entre estantes de paletes",
          title: "Módulo 4 — Substituição e gestão de baterias, riscos e prevenção",
          subtitle: "Troca em dupla, descanso de 1,5 h, água desmineralizada, riscos químicos e análise de acidentes."
        },
        {
          id: "nr11-m4-troca",
          type: "content",
          layout: "flow",
          fit: true,
          eyebrow: "Procedimento",
          title: "Troca de Bateria em Dupla",
          titleAccent: "em Dupla",
          cards: [
            { icon: "1", title: "Vista as luvas", body: "As duas pessoas usam as luvas de segurança antes de tocar na bateria ou no conector." },
            { icon: "2", title: "Desligue a chave", body: "A chave elétrica fica desligada. Ninguém troca bateria com o equipamento energizado." },
            { icon: "3", title: "Abra a tampa", body: "Abra a cobertura da bateria e confirme que o conjunto está estável." },
            { icon: "4", title: "Solte a trava", body: "Solte a trava de segurança só depois da chave desligada." },
            { icon: "5", title: "Desconecte o cabo", body: "Segure pela alça do conector. Não puxe pelos fios." },
            { icon: "6", title: "Posicione o carrinho", body: "O carrinho de troca entra alinhado, na altura da bateria, antes de puxar o conjunto." },
            { icon: "7", title: "Retire sem as mãos na estrutura", body: "A bateria sai para o carrinho sem a mão entre o conjunto e o chassi. É assim que se evita o esmagamento." },
            { icon: "8", title: "Instale a bateria nova", body: "A bateria carregada entra no mesmo alojamento, assentada por completo." },
            { icon: "9", title: "Confira a polaridade", body: "A polaridade é verificada antes de conectar. Polo invertido provoca curto-circuito." },
            { icon: "10", title: "Trave a bateria", body: "A trava volta a prender o conjunto. Bateria solta não entra em operação." },
            { icon: "11", title: "Feche e confira 100%", body: "Feche a tampa, ligue e confirme 100% de carga no painel antes de sair com a máquina." }
          ],
          note: { alert: true, label: "Duas pessoas", text: "A troca é obrigatoriamente feita por duas pessoas. Uma pessoa sozinha não retira nem instala a bateria." }
        },
        {
          id: "nr11-m4-video-box",
          type: "video",
          kicker: "Vídeo",
          title: "Gestão do Box, Tempo de Descanso, Nível de Água e Formulário de Controle",
          playerId: "panda-d1597e97-f5a4-4c83-b7a4-725435dfccd2",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d1597e97-f5a4-4c83-b7a4-725435dfccd2"
        },
        {
          id: "nr11-m4-box",
          type: "content",
          fit: true,
          eyebrow: "Box de baterias",
          title: "Descanso, Sinalização e Água",
          titleAccent: "Descanso, Sinalização e Água",
          body: "A bateria que saiu do carregador ainda não está pronta para a máquina.",
          cards: [
            { icon: "⏱️", title: "Descanso de 1,5 hora", body: "Depois da recarga, a bateria descansa 1,5 hora antes de voltar à operação." },
            { icon: "🏷️", title: "Etiqueta do box", body: "Cada bateria é identificada como carregada, descarregada ou em descanso. Sem etiqueta, ela não circula." },
            { icon: "💧", title: "Água só depois da recarga", body: "A água desmineralizada entra estritamente após a recarga. Não bata nas boias." },
            { icon: "📋", title: "Controle de Bateria", body: "Cada movimentação, recarga e reposição de água é registrada no formulário Controle de Bateria." }
          ],
          note: { label: "Ordem", text: "Primeiro a recarga termina. Depois o descanso de 1,5 hora. A água desmineralizada não antecipa a carga." }
        },
        {
          id: "nr11-m4-video-riscos",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Químicos, Primeiros Socorros e Prevenção de Acidentes Operacionais",
          playerId: "panda-435ecddd-05aa-4a35-b898-76cb6a9efc22",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=435ecddd-05aa-4a35-b898-76cb6a9efc22"
        },
        {
          id: "nr11-m4-emergencia",
          type: "content",
          fit: true,
          eyebrow: "Emergência",
          title: "Manutenção da Bateria, Neutralização e Emergências",
          titleAccent: "Neutralização e Emergências",
          body: "Ácido, curto-circuito e princípio de incêndio pedem conduta imediata e correta.",
          cards: [
            { icon: "🧪", title: "Neutralize o ácido", body: "No derramamento acidental, neutralize na hora com bicarbonato de sódio e água até parar de borbulhar." },
            { icon: "✨", title: "Limpa e seca", body: "Mantenha a bateria limpa e seca. Assim evita fuga de corrente para a terra e corrosão." },
            { icon: "🚫", title: "Nada sobre a bateria", body: "Nunca coloque ferramenta, pano ou objeto sobre a bateria. Isso provoca curto-circuito e pode causar explosão." },
            { icon: "🔋", title: "Não descarregue até o fim", body: "Evite descarregar a bateria até o final. A descarga total reduz drasticamente a vida útil." },
            { icon: "🚨", title: "Alarme de incêndio", body: "Ao soar o alarme, estacione a paleteira em local seguro e libere por completo a via de evacuação." },
            { icon: "🧯", title: "Princípio de incêndio", body: "Peça ajuda e acione a Brigada de Emergência. Com treinamento de brigadista, combata com pó químico ou CO₂ — adequados a equipamento elétrico." }
          ],
          note: { alert: true, label: "Extintor certo", text: "Em equipamento elétrico, use pó químico ou dióxido de carbono (CO₂). Não use água." }
        },
        {
          id: "nr11-m4-desafio",
          type: "quiz-intro",
          title: "Bateria e prevenção",
          body: "Quatro perguntas sobre troca, box, ácido e acidentes. Acerte no mínimo <strong>3</strong> de <strong>4</strong> para concluir o treinamento.",
          count: 4,
          minCorrect: 3,
          icon: "🔋"
        },
        {
          id: "nr11-m4-p1",
          type: "question",
          icon: "🔋",
          image: "assets/fotos/m7i3.png",
          imageAlt: "Área de bateria da transpaleteira, com alerta de curto e de chama",
          question: "Como a troca de bateria deve ser feita?",
          alternatives: [
            { id: "a", text: "Por uma pessoa, com a chave ligada, para ganhar tempo.", correct: false },
            { id: "b", text: "Por duas pessoas: luvas, chave desligada, retirada sem as mãos na estrutura, polaridade conferida, trava fechada e 100% no painel.", correct: true },
            { id: "c", text: "Puxando o cabo pelos fios e deixando a trava aberta se a carga estiver em 100%.", correct: false }
          ],
          explanation: "A troca é sempre em dupla. Chave desligada, mãos fora da estrutura, polaridade certa, trava e tampa fechadas, com 100% confirmados no painel.",
          review: "Troca em dupla"
        },
        {
          id: "nr11-m4-p2",
          type: "question",
          icon: "⏱️",
          image: "assets/fotos/m4i2.png",
          imagePosition: "center top",
          imageAlt: "Box de baterias com as áreas carregada, descarregada e em descanso",
          question: "Depois que a recarga termina, qual é a conduta no box?",
          alternatives: [
            { id: "a", text: "A bateria volta direto para a máquina e a água desmineralizada entra antes da carga, batendo na boia para nivelar.", correct: false },
            { id: "b", text: "Descanso obrigatório de 1,5 hora, etiqueta de carregada, descarregada ou descanso, água desmineralizada só após a recarga e registro no Controle de Bateria.", correct: true },
            { id: "c", text: "O descanso é de 15 minutos e o formulário é opcional.", correct: false }
          ],
          explanation: "A bateria descansa 1,5 hora, identificada no box. A água desmineralizada só entra depois da recarga, sem bater nas boias. Tudo vai para o formulário Controle de Bateria.",
          review: "Descanso de 1,5 h"
        },
        {
          id: "nr11-m4-p3",
          type: "question",
          icon: "🧪",
          image: "assets/fotos/m4i3.png",
          imageAlt: "Operador lava o braço com água abundante após contato com ácido, com colega ao lado",
          question: "O ácido da bateria atingiu o braço de um colega na área de recarga. Qual é a primeira conduta?",
          alternatives: [
            { id: "a", text: "Secar com pano e voltar a operar, porque a área de recarga admite faísca.", correct: false },
            { id: "b", text: "Lavar com água em abundância e encaminhar para atendimento médico. Chama e faísca continuam proibidas na área.", correct: true },
            { id: "c", text: "Esperar a ardência passar antes de molhar, para não espalhar o ácido.", correct: false }
          ],
          explanation: "Lave na hora com muita água e procure atendimento médico. Na área de recarga não se fuma, não se faz faísca e não se aproxima chama.",
          review: "Água e atendimento médico"
        },
        {
          id: "nr11-m4-p4",
          type: "question",
          icon: "⚠️",
          image: "assets/fotos/capa-modulo6.png",
          imageAlt: "Operação de transpaleteira no corredor, cenário dos riscos de colisão e queda de carga",
          question: "Quais acidentes esta operação precisa prevenir, e o que sustenta essa prevenção?",
          alternatives: [
            { id: "a", text: "Apenas o atraso de entrega, desde que a velocidade passe de 6 km/h.", correct: false },
            { id: "b", text: "Tombamento, colisão, atropelamento e queda de material. A prevenção é dever de cada operador e da equipe.", correct: true },
            { id: "c", text: "Só o tombamento, e apenas quando a chefia estiver no corredor.", correct: false }
          ],
          explanation: "Os riscos centrais são tombamento, colisão, atropelamento e queda de material. Parar a manobra insegura é compromisso individual e coletivo.",
          review: "Quatro riscos da operação"
        },
        {
          id: "nr11-m4-final",
          type: "finale",
          kicker: "Conclusão",
          image: "assets/fotos/capafinal.png",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento de operação da transpaleteira.",
          quote: "Cada cuidado conta.",
          chips: ["NR-11", "EPI", "Transpaleteira", "Bateria"]
        }
      ]
    }
  ]
};
