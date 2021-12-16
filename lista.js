let aluno = {
    nome="Anne",
    faltas = 5,
    notas =[8,9,10],
};
function aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
  }

let aluno ={
  calcularMedia = function () {
      media = 0;
      somaNotas = 0;
      for (let i = 0; i < this.notas.length; i++) {
        somaNotas += this.notas[i];
      }
      return somaNotas / this.notas.length;
    },
    this.faltas = function () {
      this.qtdFaltas++;
    }
};

console.log(aluno.faltas());
console.log(aluno.calcularMedia());

module.exports = aluno;

const aluno = require('./lista');

    let curso = {
        nome_do_curso: "Estatistica Básica",
        nota_de_aprovação: 7,
        faltas_maximas: 10,
        lista_de_estudantes:[aluno.nome],
        mais_alunos: function(){
            this.lista_de_estudantes.push("Joana");
            return this.lista_de_estudantes;
        }
    }
    
    console.log(curso.mais_alunos());

    aprovou: function(){
        if(aluno.calcularMedia >= this.nota_de_aprovação && aluno.faltas < this.faltas_maximas){
            return console.log("Aprovado!");
        }
        else if(aluno.calcularMedia > (0.10*(this.nota_de_aprovação)) && aluno.faltas == this.faltas_maximas){
            return console.log("Aprovado");
        }
        else{
            return console.log("Reprovado");
        }

    },
    aprovados: function(){
        if(curso.aprovou == "Aprovado"){
            return true;
        }
        else{
            return false;
        }

    }
}
