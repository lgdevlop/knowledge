module.exports = app => {
  /**
   * Verifica se o valor existe, não existindo lança um throw.
   * @param {number | string | array} value Valor a ser conferido
   * @param {string} msg Mensagem a ser exibida no throw
   */
  function existsOrError(value, msg) {
    if(!value) throw msg
    if(Array.isArray(value) && value.length === 0) throw msg
    if(typeof value === 'string' && !value.trim()) throw msg
  }
  /**
   * Verifica se o valor não existe, caso existindo lança um throw.
   * @param {number | string | array} value Valor a ser conferido
   * @param {string} msg Mensagem a ser exibida no throw
   */
  function notExistsOrError(value, msg) {
    try {
      existsOrError(value, msg)
    } catch(msg) {
      return
    }
    throw msg
  }
  /**
   * Compara os valores de duas variáveis, não sendo iguais lança um throw.
   * @param {*} valueA Primeira variável a ser comparada
   * @param {*} valueB Segunda variável a ser comparada
   * @param {*} msg Mensagem a ser exibida no throw
   */
  function equalsOrError(valueA, valueB, msg) {
    if(valueA !== valueB) throw msg
  }

  return { existsOrError, notExistsOrError, equalsOrError}
}

