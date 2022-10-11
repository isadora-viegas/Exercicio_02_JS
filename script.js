const students = [
 {
  name: "Tiago",
  primeiraProva: 8,
  segundaProva: 8
},

{
  name: "Isabela",
  primeiraProva: 4,
  segundaProva: 9,
},

{
  name: "Vitor",
  primeiraProva: 2,
  segundaProva: 1,
},

{
  name: "Amanda",
  primeiraProva: 10,
  segundaProva: 8,
},

{
  name: "Larissa",
  primeiraProva: 5,
  segundaProva: 2,
}

]


function mediaNota (primeiraProva, segundaProva) {
  let media = (primeiraProva + segundaProva) /2
  return media 
}

for (let student of students) {
  let media = mediaNota(student.primeiraProva, student.segundaProva)


  if (media >=7) {
  alert(`
  A média do aluno(a):  ${student.name} é de: ${media}
  Parabéns, ${student.name}! Você foi aprovado(a) no concurso! `)
} else {
  alert(` 
  A média do aluno(a):  ${student.name} é de: ${media}
  Não foi dessa vez, ${student.name}! Tente novamente!`)
}
}
