using System.Collections.Generic;

namespace SmartSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor() { }
        public Professor(int Id, string Nome)
        {
            this.Id = Id;
            this.Nome = Nome;        
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public IEnumerable<Disciplina> Disciplinas { get; set; }        
    }
}