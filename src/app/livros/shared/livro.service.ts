import { Injectable } from '@angular/core';
import { Livro } from '.';

@Injectable()
export class LivroService {

  constructor() { }

  listarTodos(): Livro[] {
    const livros = localStorage['livros'];
    return livros ? JSON.parse(livros) : []
    // if(livros){
    //   return JSON.parse(livros)
    // } else {
    //   return []
    // }
  }
  cadastrarLivro(livro: Livro): void {
    const livros = this.listarTodos();
    livro.id = new Date().getTime();
    livros.push(livro);
    localStorage['livros'] = JSON.stringify(livros)
  }
}
