function Alunos(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = qtdFaltas;
    this.notas = notas;
    this.faltas = function() {
      this.faltas += 1;
    },
      this.calcularMedia = function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
          soma += this.notas[i];
        }
  
        return soma / this.notas.length;
      }
  }
  
  const aluno1 = new Aluno("Ana", 6, [10, 9, 8, 7]);
  const aluno2 = new Aluno("Lucas", 9, [3, 4, 5, 6]);
  const aluno3 = new Aluno("Joana", 4, [7, 5, 10, 10]);

  
  var curso = {
    nomeCurso: 'Estatistica Básica ',
    notaAprovacao: 7,
    faltasMaximas: 10,
    listaEstudantes: [
      aluno1,
      aluno2,
      aluno3,
    ],
    novoEstudante: function(estudante) {
      this.listaEstudantes.push(estudante);
    },
    aprovacao: function(user) {
      let media = user.calcularMedia();
      let resultado = false;
  
      if ((user.qtdFaltas < this.faltasMaximas && media >= this.notaAprovacao) ||
        (user.qtdFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1))
      ) {
        resultado = (this.notaAprovacao + true);
      }
  
      return resultado;
    }
  }
  
  console.log(curso.aprovacao(aluno1))
  console.log(curso.aprovacao(aluno2))
  console.log(curso.aprovacao(aluno3))
