using System.Collections.Generic;

namespace SmartSchool_WebAPI.Models
{
    public class Aluno
    {
        public Aluno() { }

        public Aluno(int Id, string Nome, string Sobrenome, string Telefone)
        {
            this.Id = Id;
            this.Nome = Nome;
            this.Sobrenome = Sobrenome;
            this.Telefone = Telefone;
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Telefone { get; set; }

        public IEnumerable<AlunoDisciplina> AlunosDisciplinas { get; set; }
    }
}