using System.Collections.Generic;

namespace SmartSchool_WebAPI.Models
{
    public class Disciplina
    {
        public Disciplina() { }
        public Disciplina(int Id, string Nome, int professorId)
        {
            this.Id = Id;
            this.Nome = Nome;
            this.professorId = professorId;
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public int professorId { get; set; }
        public Professor Professor { get; set; }
        public IEnumerable<AlunoDisciplina> AlunosDisciplinas { get; set; }
    }
}