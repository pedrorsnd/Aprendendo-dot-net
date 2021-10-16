import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public modalRef?: BsModalRef;
  public alunoForm: FormGroup;
  public title = 'Alunos';
  public alunoSelected: Aluno;
  public textSimple: string;  

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 332251 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 332252 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 332253 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 332254 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 332255 },
    { id: 6, nome: 'Pedro', sobrenome: 'Resende', telefone: 332256 },
    { id: 7, nome: 'Paulo', sobrenome: 'Copa', telefone: 332257 },
  ];


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno); //Merge de infomações com a mesmas propriedades
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  voltar() {
    this.alunoSelected = null;
  }
}
