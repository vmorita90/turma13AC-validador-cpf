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

test('Testando validação de CPF inválido 2029893903', () => {
  let usuario = new Usuario("Erick", "2029893903")
  expect(usuario.validarCPF()).toBe(false);
});

test('Testando validação de CPF inválido 1111111111111', () => {
  let usuario = new Usuario("Erick", "1111111111111")
  expect(usuario.validarCPF()).toBe(false);
});

test('Testando validação de CPF inválido 904.888.620-19', () => {
  let usuario = new Usuario("Erick", "904.888.620-19")
  expect(usuario.validarCPF()).toBe(true);
});

test('Testando validação de CPF inválido 90488862019', () => {
  let usuario = new Usuario("Erick", "90488862019")
  expect(usuario.validarCPF()).toBe(true);
});