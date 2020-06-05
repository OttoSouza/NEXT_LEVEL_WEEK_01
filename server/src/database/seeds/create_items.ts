import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Lampadas', image: 'lampadas.svg'},
    {title: 'Pilhas', image: 'baterias.svg'},
    {title: 'Papeis e Papelão', image: 'papeis-papelao.svg'},
    {title: 'Residuos Eletronicos', image: 'eletronicos.svg'},
    {title: 'Residuos Organicos', image: 'organicos.svg'},
    {title: 'Oleo de cozinha', image: 'oleo.svg'}
  ]);
}