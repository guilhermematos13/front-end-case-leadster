import { rest } from 'msw'

export const handlers = [
  rest.get('videos', (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 1,
          title:
            'Por que o Marketing Conversacional é a grande tendência de 2023?',
          description:
            "Neste corte do webinar 'O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital', Fabrício Toledo (CEO da Leadster) revela por que o Marketing Conversacional é a grande tendência de 2023.",
          url: 'https://www.youtube.com/embed/uMWSbDyz2So',
          date: '18/03/2023',
          type: 'Chatbot',
        },
        {
          id: 2,
          title:
            'Os passos do Marketing Digital para Startups (Webinar completo)',
          description:
            "Na mentoria 'Os passos do Marketing Digital para Startups', oferecida pela LegalHub, o CMO da Leadster, Gustavo Luby compartilha com jovens empreendedores os desafios de empreender na área de tecnologia e as estratégias que levaram a Leadster a conquistar 2800 clientes e a sua terceira rodada de investimentos em 3 anos de existência.",
          url: 'https://www.youtube.com/embed/gK8uPCkka7c',
          date: '14/03/2023',
          type: 'Chatbot',
        },
      ]),
    ),
  ),
]
