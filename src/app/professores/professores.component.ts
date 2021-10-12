import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorForm: FormGroup;
  public title = 'Professores';  
  public professorSelected: Professor;  
  public modalRef?: BsModalRef;

  professores = [
    { id: 1, nome: 'Marcela', disciplina: 'Matemática' },
    { id: 2, nome: 'Nicole', disciplina: 'Artes'},
    { id: 3, nome: 'Raul', disciplina: 'Historia'},
    { id: 4, nome: 'Joao', disciplina: 'Ed. física'},
    { id: 5, nome: 'Bolota', disciplina: 'Física'}
  ];

  constructor(private modalService: BsModalService) { }
  
  ngOnInit(): void {
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  professorSelect(professor: Professor){
    this.professorSelected = professor;    
  }

  voltar(){
    this.professorSelected = null;
  }
}
