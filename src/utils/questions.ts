interface QuestionOptionProps {
  value: string | number | boolean
  name: string
}

export interface QuestionProps {
  id: number
  title: string
  options: QuestionOptionProps[]
}

export const questions: QuestionProps[] = [
  {
    id: 0,
    title: 'Qual é a sua idade?',
    options: [
      { value: 18, name: 'Menos 18' },
      { value: 25, name: '18 a 59' },
      { value: 65, name: '60 a 74' },
      { value: 76, name: 'Mais de 75' }
    ]
  },
  {
    id: 1,
    title: 'Qual sua área de atuação?',
    options: [
      { value: 'saude', name: 'Saúde' },
      { value: 'educacao', name: 'Educação' },
      { value: 'seguranca', name: 'Segurança' },
      { value: 'outra', name: 'Outra' }
    ]
  },
  {
    id: 2,
    title: 'Você tem alguma comobidade que agrave a Covid-19?',
    options: [
      { value: true, name: 'Sim' },
      { value: false, name: 'Não' }
    ]
  },
  {
    id: 3,
    title: 'Você pertence a algum destes grupos?',
    options: [
      { value: 'indigenas', name: 'Indígenas' },
      { value: 'quilombolas', name: 'Quilombolas' },
      { value: 'ribeirinhos', name: 'Ribeirinhos' },
      { value: 'nao', name: 'Não' }
    ]
  },
  {
    id: 4,
    title: 'Você é gestante?',
    options: [
      { value: true, name: 'Sim' },
      { value: false, name: 'Não' }
    ]
  }
]
