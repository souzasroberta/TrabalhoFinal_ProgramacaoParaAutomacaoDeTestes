import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';
 
describe('Classe de Serviço de Pagamento', () => {
 
  it('Validar que o pagamento é adicionado na lista de pagamentos', function() {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();
 
    // Act
    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
 
    // Assert
    assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
    assert.equal(ultimoPagamento.empresa, 'Samar');
    assert.equal(ultimoPagamento.valor, 156.87);
  });
 
  it('Validar que pagamento com valor acima de 100.00 recebe categoria "cara"', function() {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();
 
    // Act
    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
 
    // Assert
    assert.equal(ultimoPagamento.categoria, 'cara');
  });
 
  it('Validar que pagamento com valor igual ou abaixo de 100.00 recebe categoria "padrão"', function() {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();
 
    // Act
    servicoDePagamento.pagar('1234-5678-9012', 'Copel', 99.99);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
 
    // Assert
    assert.equal(ultimoPagamento.categoria, 'padrão');
  });
 
  it('Validar que consultarUltimoPagamento retorna apenas o último pagamento realizado', function() {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();
 
    // Act
    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    servicoDePagamento.pagar('1111-2222-3333', 'Claro', 89.90);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
 
    // Assert
    assert.equal(ultimoPagamento.empresa, 'Claro');
  });
 
});