export enum FuncaoUsuario {
  Admin = 'Admin',
  Analista = 'Analista',
  Supervisor = 'Supervisor',
  Revisor = 'Revisor'
}

export enum StatusRelatorio {
  Formalizando = 'Formalizando',
  Revisao = 'Revisao',
  Aprovado = 'Aprovado',
  Emitido = 'Emitido',
  Corrigir = 'Corrigir',
  Recuperado = 'Recuperado',
  Irreversivel = 'Irreversivel'
}

export enum NaturezaSinistro {
  Roubo = 'Roubo',
  Furto = 'Furto',
  Apreensao = 'Apreensao',
  Outros = 'Outros'
}

export enum StatusFormulario {
  Pendente = 'Pendente',
  Formalizando = 'Formalizando',
  Finalizado = 'Finalizado',
  Aprovado = 'Aprovado',
  Corrigir = 'Corrigir',
  Rejeitado = 'Rejeitado'
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  avatar: string;
  funcao: FuncaoUsuario;
}

interface RelatorioFiltrado {
  id: string;
  numero_processo: string;
  natureza_sinistro: string;
  status: StatusRelatorio;
  cliente: string;
  cnpj: string;
  data_entrada: string;
  data_emissao: string;
  usuario_responsavel: Usuario;
  usuarios_permitidos: Usuario[];
  formularios_selecionados: FormularioSelecionado[];
  formularios: Formularios;
}

export interface Relatorio {
  relatorio_filtrado: RelatorioFiltrado[];
}

export type ReporTypeForms = Relatorio;

// export interface Relatorio {
//   relatorio_filtrado: {
//     id: string;
//     numero_processo: string;
//     natureza_sinistro: string;
//     status: StatusRelatorio;
//     cliente: string;
//     cnpj: string;
//     data_entrada: string;
//     data_emissao: string;
//     usuario_responsavel: Usuario;
//     usuarios_permitidos: Usuario[];
//     formularios_selecionados: FormularioSelecionado[];
//     formularios: Formularios;
//   }[];
// }

export interface FormularioSelecionado {
  form: string;
  etapa: string;
}

export interface Formularios {
  numero_processo: string;
  qtd_etapas_formulario: string;
  etapas: Etapas[];
}

export interface Etapas {
  form1_Cliente_Segurado: Form1ClienteSegurado;
  form2_Caracteristica_Sinistro: Form2CaracteristicaSinistro;
  form3_Cronologia_Sinistro: Form3CronologiaSinistro;
  form4_Do_Carregamento: Form4DoCarregamento;
  form5_Motorista: Form5Motorista;
  form6_Ajudantes: Form6Ajudantes;
  form7_Veiculo_Transportador: Form7VeiculoTransportador;
  form8_Orgao_Policial: Form8OrgaoPolicial;
  form9_Gerenciamento_Risco_Veiculo: Form9GerenciamentoRiscoVeiculo;
  form10_Sistemas_Protecao_Carregamento: Form10SistemasProtecaoCarregamento;
  form11_Declaracao_Motorista_Ajudante: Form11DeclaracaoMotoristaAjudante;
  form12_Gerenciamento_Risco_Deposito: Form12GerenciamentoRiscoDeposito;
  form13_Locais_Evento: Form13LocaisEvento;
  form14_Resumo_Averiguacoes: Form14ResumoAveriguacoes;
  form15_Recuperacao_Carga: Form15RecuperacaoCarga;
  form16_Anexos_Fotograficos: Form16AnexosFotograficos;
  form17_Conclusao: Form17Conclusao;
}

export enum FormName {
  form1_Cliente_Segurado = 'Cliente segurado',
  form2_Caracteristica_Sinistro = 'Característica do sinistro',
  form3_Cronologia_Sinistro = 'Cronologia do sinistro',
  form4_Do_Carregamento = 'Do carregamento',
  form5_Motorista = 'Motorista',
  form6_Ajudantes = 'Ajudantes',
  form7_Veiculo_Transportador = 'Veículo transportador',
  form8_Orgao_Policial = 'Órgão policial',
  form9_Gerenciamento_Risco_Veiculo = 'Gerenciamento de risco do veículo',
  form10_Sistemas_Protecao_Carregamento = 'Sistemas de proteção do carregamento',
  form11_Declaracao_Motorista_Ajudante = 'Declaração do motorista e ajudantes',
  form12_Gerenciamento_Risco_Deposito = 'Gerenciamento de risco do depósito',
  form13_Locais_Evento = 'Locais do evento',
  form14_Resumo_Averiguacoes = 'Resumo das averiguações',
  form15_Recuperacao_Carga = 'Recuperação da carga',
  form16_Anexos_Fotograficos = 'Anexos fotográficos',
  form17_Conclusao = 'Conclusão'
}

export interface Form1ClienteSegurado {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string;
  nome_cliente: string;
  cnpj: string;
  telefone?: string | null;
  celular?: string | null;
  email?: string | null;
  representante?: string | null;
  cep?: string | null;
  endereco?: string | null;
  numero?: string | null;
  complemento?: string | null;
  bairro?: string | null;
  cidade?: string | null;
  uf?: string | null;
}

export interface Form2CaracteristicaSinistro {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string;
  nome_seguradora?: string | null;
  natureza_sinistro: NaturezaSinistro;
  carga_embarcada?: string | null;
  valor_carga?: string | null;
}

export interface Form3CronologiaSinistro {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string;
  cep_local_sinistro?: string | null;
  endereco_local_sinistro?: string | null;
  numero_local_sinistro?: string | null;
  complemento_local_sinistro?: string | null;
  bairro_local_sinistro?: string | null;
  cidade_local_sinistro?: string | null;
  uf_local_sinistro?: string | null;
  comunicante?: string | null;
  data_hora_sinistro?: string | null;
  data_hora_comunicacao?: string | null;
  agente_pamcary?: string | null;
  data_hora_chegada_local?: string | null;
}

export interface Form4DoCarregamento {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  transportadora?: string | null;
  valor_embarcado?: string | null;
  remetente?: string | null;
  cep_origem?: string | null;
  endereco_origem?: string | null;
  numero_origem?: string | null;
  cidade_origem?: string | null;
  bairro_origem?: string | null;
  uf_origem?: string | null;
  complemento_origem?: string | null;
  destinatario?: string | null;
  cep_destino?: string | null;
  endereco_destino?: string | null;
  numero_destino?: string | null;
  cidade_destino?: string | null;
  bairro_destino?: string | null;
  uf_destino?: string | null;
  complemento_destino?: string | null;
  numero_crtc_dacte?: string | null;
  numero_nota_fiscal?: string | null;
  manifesto?: string | null;
}

export interface Form5Motorista {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  nome_motorista?: string | null;
  cpf_motorista?: string | null;
  data_nascimento_motorista?: string | null; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  local_nascimento_motorista?: string | null;
  cnh_motorista?: string | null;
  tipo_cnh_motorista?: string | null;
  validade_cnh_motorista?: string | null; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  cep_motorista?: string | null;
  endereco_motorista?: string | null;
  numero_motorista?: string | null;
  complemento_motorista?: string | null;
  bairro_motorista?: string | null;
  cidade_motorista?: string | null;
  uf_motorista?: string | null;
  telefone_motorista?: string | null;
  celular_motorista?: string | null;
  email_motorista?: string | null;
  vinculo_motorista_empresa?: string | null;
  consulta_telerisco_motorista?: string | null;
  numero_consulta_telerisco_motorista?: string | null;
  data_consulta_telerisco_motorista?: string | null; // Ajuste o tipo conforme necessário (por exemplo, para Date)
}

export interface Form6Ajudantes {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  nome_ajudante?: string | null;
  cpf_ajudante?: string | null;
  data_nascimento_ajudante?: string | null; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  local_nascimento_ajudante?: string | null;
  cnh_ajudante?: string | null;
  tipo_cnh_ajudante?: string | null;
  validade_cnh_ajudante?: string | null; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  cep_ajudante?: string | null;
  endereco_ajudante?: string | null;
  numero_ajudante?: string | null;
  complemento_ajudante?: string | null;
  bairro_ajudante?: string | null;
  cidade_ajudante?: string | null;
  uf_ajudante?: string | null;
  telefone_ajudante?: string | null;
  celular_ajudante?: string | null;
  email_ajudante?: string | null;
  vinculo_ajudante_empresa?: string | null;
}

export interface Form7VeiculoTransportador {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  // Cavalo Mecânico
  placa_cavalo_mecanico?: string | null;
  renavam_cavalo_mecanico?: string | null;
  chassi_cavalo_mecanico?: string | null;
  marca_cavalo_mecanico?: string | null;
  modelo_cavalo_mecanico?: string | null;
  ano_fabricacao_cavalo_mecanico?: string | null;
  ano_modelo_cavalo_mecanico?: string | null;
  cor_cavalo_mecanico?: string | null;
  proprietario_cavalo_mecanico?: string | null;
  cpf_cnpj_proprietario_cavalo_mecanico?: string | null;
  uf_cavalo_mecanico?: string | null;

  // Carreta
  placa_carreta?: string | null;
  renavam_carreta?: string | null;
  chassi_carreta?: string | null;
  marca_carreta?: string | null;
  modelo_carreta?: string | null;
  ano_fabricacao_carreta?: string | null;
  ano_modelo_carreta?: string | null;
  cor_carreta?: string | null;
  proprietario_carreta?: string | null;
  cpf_cnpj_proprietario_carreta?: string | null;
  uf_carreta?: string | null;
}

export interface Form8OrgaoPolicial {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  delegacia?: string | null;
  endereco_delegacia?: string | null;
  numero_delegacia?: string | null;
  bairro_delegacia?: string | null;
  cidade_delegacia?: string | null;
  uf_delegacia?: string | null;
  cep_delegacia?: string | null;
  telefone_delegacia?: string | null;
  numero_bo?: string | null;
  data_bo?: string | null;
  numero_ip?: string | null;
  data_ip?: string | null;
}

export interface Form9GerenciamentoRiscoVeiculo {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  rastreamento: {
    rastreador_sistema: string | null;
    rastreador_marca: string | null;
    rastreador_modelo: string | null;
    rastreador_tipo: string | null;
    rastreador_posicionamento: string | null;
  };

  segunda_tecnologia_rastreamento: {
    segunda_tecnologia: string | null;
    segunda_tecnologia_marca: string | null;
    segunda_tecnologia_modelo: string | null;
    segunda_tecnologia_tipo: string | null;
    segunda_tecnologia_posicionamento: string | null;
  };

  outros_sistemas_rastreamento: {
    outros_sistemas: string | null;
    outros_sistemas_marca: string | null;
    outros_sistemas_modelo: string | null;
    outros_sistemas_tipo: string | null;
    outros_sistemas_posicionamento: string | null;
  };

  sensores_atuadores: {
    sensor_bloqueio_combustivel: boolean | null;
    sensor_bloqueio_ignicao: boolean | null;
    sensor_trava_5Roda: boolean | null;
    sensor_trava_portas_bau: boolean | null;
    sensor_porta_cabine: boolean | null;
    sensor_porta_bau: boolean | null;
    sensor_isca: boolean | null;
    sensor_sonoros_visuais: boolean | null;
    sensor_botao_panico: boolean | null;
    sensor_teclado: boolean | null;
    sensor_desengate_carreta: boolean | null;
    sensor_outros: boolean | null;
    sensor_outros_descricao: string | null;
  };

  central_monitoramento: {
    plano_viagem: boolean | null;
    tacografo: boolean | null;
    paradas_nao_programadas: boolean | null;
    rastramento_analisado: boolean | null;
    tacografo_analisado: boolean | null;
    historico_rastreamento: boolean | null;
    macros_transmitida: boolean | null;
    sirene_ativada: boolean | null;
    bloqueio_rastreador: boolean | null;
    vandalismo_rastreador: boolean | null;
  };

  ultima_posicao_rastreamento: {
    data_hora: string | null;
    descricao: string | null;
  };

  disco_tacografo: {
    data_hora: string | null;
    descricao: string | null;
  };
}

export interface Form10SistemasProtecaoCarregamento {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  protecao: {
    protecao_escolta: boolean | null;
    protecao_comboio: boolean | null;
    protecao_velada: boolean | null;
    protecao_outros: boolean | null;
    protecao_veiculos: string | null;
  };
}

export interface Form11DeclaracaoMotoristaAjudante {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string;

  arquivos_declaracoes: Arquivo[];
}

export interface Form12GerenciamentoRiscoDeposito {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  // Depósito
  deposito_sinistrado_segurado: boolean | null;
  deposito_seguranca_eletronica: boolean | null;
  deposito_seguranca_patrimonial: boolean | null;
  deposito_mercadoria_carregada: boolean | null;

  // Dispositivos de Segurança no local de armazenamento
  dispositivo_seguranca_cftv: boolean | null;
  dispositivo_seguranca_botao_panico: boolean | null;
  dispositivo_seguranca_alarme_sonoro: boolean | null;
  dispositivo_seguranca_sensores_invasao: boolean | null;
  dispositivo_seguranca_cerca_eletrica: boolean | null;
  dispositivo_seguranca_sensores_presenca: boolean | null;
  dispositivo_seguranca_sirene: boolean | null;
  dispositivo_seguranca_outros: boolean | null;

  // Empresa de Segurança Patrimonial, quando aplicável.
  empresa_seguranca_patrimonial_nome: string | null;
  empresa_seguranca_patrimonial_cnpj: string | null;
  empresa_seguranca_patrimonial_cep: string | null;
  empresa_seguranca_patrimonial_endereco: string | null;
  empresa_seguranca_patrimonial_numero: string | null;
  empresa_seguranca_patrimonial_complemento: string | null;
  empresa_seguranca_patrimonial_bairro: string | null;
  empresa_seguranca_patrimonial_cidade: string | null;
  empresa_seguranca_patrimonial_uf: string | null;
  empresa_seguranca_patrimonial_telefone: string | null;
  empresa_seguranca_patrimonial_celular: string | null;
  empresa_seguranca_patrimonial_email: string | null;
  empresa_seguranca_patrimonial_representante: string | null;
}

export interface Form13LocaisEvento {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  // Descrição do Local da Abordagem
  local_abordagem_rodovia: string | null;
  local_abordagem_cep: string | null;
  local_abordagem_endereco: string | null;
  local_abordagem_numero: string | null;
  local_abordagem_complemento: string | null;
  local_abordagem_bairro: string | null;
  local_abordagem_cidade: string | null;
  local_abordagem_uf: string | null;
  local_abordagem_ponto_referencia: string | null;
  local_abordagem_latitude: string | null;
  local_abordagem_longitude: string | null;
  local_abordagem_data_hora: string | null;
  local_abordagem_cftv: boolean | null;
  local_abordagem_testemunhas: boolean | null;

  // Anexo Registros Fotográficos do Local da Abordagem
  fotos_local_da_abordagem: Arquivo[];

  // Descrição do Local de Cativeiro e Abandono do Motorista
  local_cativeiro_rodovia: string | null;
  local_cativeiro_cep: string | null;
  local_cativeiro_endereco: string | null;
  local_cativeiro_numero: string | null;
  local_cativeiro_complemento: string | null;
  local_cativeiro_bairro: string | null;
  local_cativeiro_cidade: string | null;
  local_cativeiro_uf: string | null;
  local_cativeiro_ponto_referencia: string | null;
  local_cativeiro_latitude: string | null;
  local_cativeiro_longitude: string | null;
  local_cativeiro_data_hora: string | null;
  local_cativeiro_cftv: boolean | null;
  local_cativeiro_testemunhas: boolean | null;

  // Anexo Registros Fotográficos do Local de Cativeiro e Abandono do Motorista
  fotos_local_de_cativeiro_e_abandono_do_motorista: Arquivo[];

  // Descrição do Local de Encontro do Veículo
  local_encontro_rodovia: string | null;
  local_encontro_cep: string | null;
  local_encontro_endereco: string | null;
  local_encontro_numero: string | null;
  local_encontro_complemento: string | null;
  local_encontro_bairro: string | null;
  local_encontro_cidade: string | null;
  local_encontro_uf: string | null;
  local_encontro_ponto_referencia: string | null;
  local_encontro_latitude: string | null;
  local_encontro_longitude: string | null;
  local_encontro_data_hora: string | null;
  local_encontro_cftv: boolean | null;
  local_encontro_testemunhas: boolean | null;

  // Anexo Registros Fotográficos do Local de Encontro do Veículo
  fotos_local_de_encontro_do_veiculo: Arquivo[];

  // Descrição do Local de Recuperação da Carga
  local_recuperacao_rodovia: string | null;
  local_recuperacao_cep: string | null;
  local_recuperacao_endereco: string | null;
  local_recuperacao_numero: string | null;
  local_recuperacao_complemento: string | null;
  local_recuperacao_bairro: string | null;
  local_recuperacao_cidade: string | null;
  local_recuperacao_uf: string | null;
  local_recuperacao_ponto_referencia: string | null;
  local_recuperacao_latitude: string | null;
  local_recuperacao_longitude: string | null;
  local_recuperacao_data_hora: string | null;
  local_recuperacao_cftv: boolean | null;
  local_recuperacao_testemunhas: boolean | null;

  // Anexo Registros Fotográficos do Local de Recuperação da Carga
  fotos_local_de_recuperacao_da_carga: Arquivo[];
}

export interface Form14ResumoAveriguacoes {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  resumo_averiguacoes: string | null; // Ajuste o tipo conforme necessário
}

export interface Form15RecuperacaoCarga {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  recuperacao_carga_recuperada: boolean | null; // Ajuste o tipo conforme necessário
  recuperacao_carga_parcial: boolean | null; // Ajuste o tipo conforme necessário
  fato_gerador_recuperacao_carga: string | null; // Ajuste o tipo conforme necessário
}

export interface Form16AnexosFotograficos {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  anexos_fotograficos: Arquivo[]; // Certifique-se de definir a estrutura correta para o relacionamento
}

export interface Form17Conclusao {
  id: string;
  numero_processo: string;
  status: StatusFormulario;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)
  conclusao_averiguacoes: string; // Certifique-se de ajustar o tipo conforme necessário
}

export interface Arquivo {
  id: string;
  numero_processo: string;
  relatorio_id: string;
  data_cadastro: string; // Ajuste o tipo conforme necessário (por exemplo, para Date)

  form_id?: string | null;
  form_nome?: string | null;
  form_arquivo_campo_nome?: string | null;

  arquivo_nome?: string | null;
  arquivo_tamanho?: number | null;
  arquivo_chave: string;
  arquivo_localizacao: string;
}
