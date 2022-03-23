exports.serialize = function (associado) {
    return {
        associado_id: associado.associado_id,
        nome: associado.nome,
        dataNascimento: associado.dataNascimento,
        profissao: associado.profissao,
        escolaridade: associado.escolaridade,
        cpf: associado.cpf,
        email: associado.email,
        telefone: associado.telefone,
        endereco: associado.endereco,
        historicoSaude: associado.historicoSaude,
        plano: associado.plano,
        tipoPlano: associado.tipoPlano,
        situacao: associado.situacao
    }
};