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
    return 'fase 1'
  }

  if (['ribeirinhos', 'indigenas'].includes(group)) {
    return 'fase 1'
  }

  if (group === 'quilombolas') {
    return 'Grupo prioritário'
  }

  if (age > 75 && ['educacao', 'seguranca'].includes(office)) {
    return 'fase 1'
  }

  if (group === 'quilombolas' || ['educacao', 'seguranca'].includes(office)) {
    return 'Grupo prioritário'
  }

  if (office === 'outra' && age < 59 && !comorbidity && group === 'nao') {
    return 'Não prioritário'
  }

  if (office === 'outra' && age < 59 && comorbidity && group === 'nao') {
    return 'Fase 3'
  }

  if (office === 'outra' && age > 60 && group === 'nao') {
    return 'Fase 2'
  }

  return 'nao mapeada'
}
