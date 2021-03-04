interface handleUserPhaseProps {
  age: number
  office: string
  comorbidity: boolean
  group: string
  pregnant: boolean
}

export const handleUserPhase = ({
  age,
  office,
  comorbidity,
  group,
  pregnant
}: handleUserPhaseProps) => {
  if (office === 'saude') {
    return { name: 'fase 1', value: 1 }
  }

  if (['ribeirinhos', 'indigenas'].includes(group)) {
    return { name: 'fase 1', value: 1 }
  }

  if (group === 'quilombolas') {
    return { name: 'Grupo prioritário', value: 4 }
  }

  if (age > 75 && ['educacao', 'seguranca'].includes(office)) {
    return { name: 'fase 1', value: 1 }
  }

  if (group === 'quilombolas' || ['educacao', 'seguranca'].includes(office)) {
    return { name: 'Grupo prioritário', value: 4 }
  }

  if (office === 'outra' && age < 59 && !comorbidity && group === 'nao') {
    return { name: 'Não prioritário', value: 5 }
  }

  if (office === 'outra' && age < 59 && comorbidity && group === 'nao') {
    return { name: 'Fase 3', value: 3 }
  }

  if (office === 'outra' && age > 60 && group === 'nao') {
    return { name: 'Fase 2', value: 2 }
  }

  return { name: 'nao mapeada', value: -1 }
}
