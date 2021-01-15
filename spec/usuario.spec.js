const Usuario = require('../models/usuario');

test('Testando se o objeto usuario tem a propriedade nome e cpf', () => {
  let usuario = new Usuario()
  usuario.nome = "Erick"
  usuario.cpf = "2029893903"
  expect(usuario.nome).not.toBeUndefined();
  expect(usuario.cpf).toBe("2029893903");
});

test('Testando se o objeto usuario tem um contrutor que preenche nome e cpf', () => {
  let usuario = new Usuario("Erick", "2029893903")
  expect(usuario.nome).not.toBeUndefined();
  expect(usuario.cpf).toBe("2029893903");
});