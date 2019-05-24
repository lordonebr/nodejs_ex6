# nodejs_ex6
POS graduação

Curso: Desenvolvimento Web Full Stack

Disciplina: Programação web com Node.js

Professor: Samuel Martins

## Exercício 6

- COMANDO para EXECUTAR o teste:
  ```
  npm install
  npm teste
  
- Testes executados:
  
  Um get na rota /products deverá listar um array de produtos:  
    √ should return object with items with value array
    
  A rota /products/:id deverá retornar um produto único:  
    √ should receive object product by id 
    
  O produto retornado na rota /products/:id deve conter as propriedades exemplificadas no passo 3:    
    √ should receive product with all keys of product
    
  Um post na rota /products deve inserir o produto na lista passado no corpo da requisição:  
    √ should insert product
    
  Um produto não deve ser inserido se a quantidade de caracteres da descrição for menor que 10:   
    √ should not insert product with description less than 10 characters 
    
  Um produto não deve ser inserido se o preço for menor ou igual a 0:  
    √ should not insert product with price less or equal 0
    
  Um DELETE na rota /products/:id deve remover um produto da lista:  
    √ should delete product by id
