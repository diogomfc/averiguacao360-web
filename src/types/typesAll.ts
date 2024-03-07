/* eslint-disable no-use-before-define */
// desabilitar no documento o Unknown word.cSpell

export interface Root {
  message: string
  relatorio_filtrado: RelatorioFiltrado[]
}

export interface RelatorioFiltrado {
  id: string
  numero_processo: string
  natureza_sinistro: string
  status: string
  cliente: string
  cnpj: string
  data_entrada: string
  data_emissao: string
  usuario_responsavel: UsuarioResponsavel
  usuarios_permitidos: UsuariosPermitido[]
  formularios_selecionados: FormulariosSelecionado[]
  formularios: Formularios
}

export interface UsuarioResponsavel {
  id: string
  nome: string
  email: string
  telefone: string
  avatar: string
  funcao: string
}

export interface UsuariosPermitido {
  id: string
  nome: string
  email: string
  telefone: string
  avatar: string
  funcao: string
}

export interface FormulariosSelecionado {
  form: string
  etapa: string
}

export interface Formularios {
  numero_processo: string
  qtd_etapas_formulario: string
  etapas: Etapas
}

export interface Etapas {
  form1_Cliente_Segurado: Form1ClienteSegurado
  form2_Caracteristica_Sinistro: Form2CaracteristicaSinistro
  form3_Cronologia_Sinistro: Form3CronologiaSinistro
  form4_Do_Carregamento: Form4DoCarregamento
  form5_Motorista: Form5Motorista
  form6_Ajudantes: Form6Ajudantes
  form7_Veiculo_Transportador: Form7VeiculoTransportador
  form8_Orgao_Policial: Form8OrgaoPolicial
  form9_Gerenciamento_Risco_Veiculo: Form9GerenciamentoRiscoVeiculo
  form10_Sistemas_Protecao_Carregamento: Form10SistemasProtecaoCarregamento
  form11_Declaracao_Motorista_Ajudante: Form11DeclaracaoMotoristaAjudante
  form12_Gerenciamento_Risco_Deposito: Form12GerenciamentoRiscoDeposito
  form13_Locais_Evento: Form13LocaisEvento
  form14_Resumo_Averiguacoes: Form14ResumoAveriguacoes
  form15_Recuperacao_Carga: Form15RecuperacaoCarga
  form16_Anexos_Fotograficos: Form16AnexosFotograficos
  form17_Conclusao: Form17Conclusao
}

export interface Form1ClienteSegurado {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  nome_cliente: string
  cnpj: string
  telefone: string
  celular: string
  email: string
  representante: string
  cep: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  formularioDoRelatorio_id: string
}

export interface Form2CaracteristicaSinistro {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  nome_seguradora: string
  natureza_sinistro: string
  carga_embarcada: string
  valor_carga: string
  formularioDoRelatorio_id: string
}

export interface Form3CronologiaSinistro {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  cep_local_sinistro: string
  endereco_local_sinistro: string
  numero_local_sinistro: string
  complemento_local_sinistro: string
  bairro_local_sinistro: string
  cidade_local_sinistro: string
  uf_local_sinistro: string
  comunicante: string
  data_hora_sinistro: string
  data_hora_comunicacao: string
  agente_pamcary: string
  data_hora_chegada_local: string
  formularioDoRelatorio_id: string
}

export interface Form4DoCarregamento {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  transportadora: string
  valor_embarcado: string
  remetente: string
  cep_origem: string
  endereco_origem: string
  numero_origem: string
  cidade_origem: string
  bairro_origem: string
  uf_origem: string
  complemento_origem: string
  destinatario: string
  cep_destino: string
  endereco_destino: string
  numero_destino: string
  cidade_destino: string
  bairro_destino: string
  uf_destino: string
  complemento_destino: string
  numero_crtc_dacte: string
  numero_nota_fiscal: string
  manifesto: string
  formularioDoRelatorio_id: string
}

export interface Form5Motorista {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  nome_motorista: string
  cpf_motorista: string
  data_nascimento_motorista: string
  local_nascimento_motorista: string
  cnh_motorista: string
  tipo_cnh_motorista: string
  validade_cnh_motorista: string
  cep_motorista: string
  endereco_motorista: string
  numero_motorista: string
  complemento_motorista: string
  bairro_motorista: string
  cidade_motorista: string
  uf_motorista: string
  telefone_motorista: string
  celular_motorista: string
  email_motorista: string
  vinculo_motorista_empresa: string
  consulta_telerisco_motorista: string
  numero_consulta_telerisco_motorista: string
  data_consulta_telerisco_motorista: string
  formularioDoRelatorio_id: string
}

export interface Form6Ajudantes {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  nome_ajudante: string
  cpf_ajudante: string
  data_nascimento_ajudante: string
  local_nascimento_ajudante: string
  cnh_ajudante: string
  tipo_cnh_ajudante: string
  validade_cnh_ajudante: string
  cep_ajudante: string
  endereco_ajudante: string
  numero_ajudante: string
  complemento_ajudante: string
  bairro_ajudante: string
  cidade_ajudante: string
  uf_ajudante: string
  telefone_ajudante: string
  celular_ajudante: string
  email_ajudante: string
  vinculo_ajudante_empresa: string
  formularioDoRelatorio_id: string
}

export interface Form7VeiculoTransportador {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  placa_cavalo_mecanico: string
  renavam_cavalo_mecanico: string
  chassi_cavalo_mecanico: string
  marca_cavalo_mecanico: string
  modelo_cavalo_mecanico: string
  ano_fabricacao_cavalo_mecanico: string
  ano_modelo_cavalo_mecanico: string
  cor_cavalo_mecanico: string
  proprietario_cavalo_mecanico: string
  cpf_cnpj_proprietario_cavalo_mecanico: string
  uf_cavalo_mecanico: string
  placa_carreta: string
  renavam_carreta: string
  chassi_carreta: string
  marca_carreta: string
  modelo_carreta: string
  ano_fabricacao_carreta: string
  ano_modelo_carreta: string
  cor_carreta: string
  proprietario_carreta: string
  cpf_cnpj_proprietario_carreta: string
  uf_carreta: string
  formularioDoRelatorio_id: string
}

export interface Form8OrgaoPolicial {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  delegacia: string
  endereco_delegacia: string
  numero_delegacia: string
  bairro_delegacia: string
  cidade_delegacia: string
  uf_delegacia: string
  cep_delegacia: string
  telefone_delegacia: string
  numero_bo: string
  data_bo: string
  numero_ip: string
  data_ip: string
  formularioDoRelatorio_id: string
}

export interface Form9GerenciamentoRiscoVeiculo {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  rastreador_sistema_rastreamento: string
  rastreador_marca: string
  rastreador_modelo: string
  rastreador_tipo: string
  rastreador_posicionamento: string
  segunda_tecnologia_rastreamento: string
  segunda_tecnologia_marca: string
  segunda_tecnologia_modelo: string
  segunda_tecnologia_tipo: string
  segunda_tecnologia_posicionamento: string
  outros_sistemas_rastreamento: string
  outros_sistemas_marca: string
  outros_sistemas_modelo: string
  outros_sistemas_tipo: string
  outros_sistemas_posicionamento: string
  sensor_bloqueio_combustivel: boolean
  sensor_bloqueio_ignicao: boolean
  sensor_trava_5Roda: boolean
  sensor_trava_portas_bau: boolean
  sensor_porta_cabine: boolean
  sensor_porta_bau: boolean
  sensor_isca: boolean
  sensor_sonoros_visuais: boolean
  sensor_botao_panico: boolean
  sensor_teclado: boolean
  sensor_desengate_carreta: boolean
  sensor_outros: boolean
  sensor_outros_descricao: string
  plano_viagem: boolean
  tacografo: boolean
  paradas_nao_programadas: boolean
  rastramento_analisado: boolean
  tacografo_analisado: boolean
  historico_rastreamento: boolean
  macros_transmitida: boolean
  sirene_ativada: boolean
  bloqueio_rastreador: boolean
  vandalismo_rastreador: boolean
  ultima_posicao_rastreamento_data_hora: string
  ultima_posicao_rastreamento_descricao: string
  disco_tacografo_data_hora: string
  disco_tacografo_descricao: string
  formularioDoRelatorio_id: string
}

export interface Form10SistemasProtecaoCarregamento {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  protecao_escolta: boolean
  protecao_comboio: boolean
  protecao_velada: boolean
  protecao_outros: boolean
  protecao_veiculos: string
  formularioDoRelatorio_id: string
}

export interface Form11DeclaracaoMotoristaAjudante {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  formularioDoRelatorio_id: string
  arquivos_declaracoes: string[]
}

export interface Form12GerenciamentoRiscoDeposito {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  deposito_sinistrado_segurado: boolean
  deposito_seguranca_eletronica: boolean
  deposito_seguranca_patrimonial: boolean
  deposito_mercadoria_carregada: boolean
  dispositivo_seguranca_cftv: boolean
  dispositivo_seguranca_botao_panico: boolean
  dispositivo_seguranca_alarme_sonoro: boolean
  dispositivo_seguranca_sensores_invasao: boolean
  dispositivo_seguranca_cerca_eletrica: boolean
  dispositivo_seguranca_sensores_presenca: boolean
  dispositivo_seguranca_sirene: boolean
  dispositivo_seguranca_outros: boolean
  empresa_seguranca_patrimonial_nome: string
  empresa_seguranca_patrimonial_cnpj: string
  empresa_seguranca_patrimonial_cep: string
  empresa_seguranca_patrimonial_endereco: string
  empresa_seguranca_patrimonial_numero: string
  empresa_seguranca_patrimonial_complemento: string
  empresa_seguranca_patrimonial_bairro: string
  empresa_seguranca_patrimonial_cidade: string
  empresa_seguranca_patrimonial_uf: string
  empresa_seguranca_patrimonial_telefone: string
  empresa_seguranca_patrimonial_celular: string
  empresa_seguranca_patrimonial_email: string
  empresa_seguranca_patrimonial_representante: string
  formularioDoRelatorio_id: string
}

export interface Form13LocaisEvento {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  local_abordagem_rodovia: string
  local_abordagem_cep: string
  local_abordagem_endereco: string
  local_abordagem_numero: string
  local_abordagem_complemento: string
  local_abordagem_bairro: string
  local_abordagem_cidade: string
  local_abordagem_uf: string
  local_abordagem_ponto_referencia: string
  local_abordagem_latitude: string
  local_abordagem_longitude: string
  local_abordagem_data_hora: string
  local_abordagem_cftv: boolean
  local_abordagem_testemunhas: boolean
  local_cativeiro_rodovia: string
  local_cativeiro_cep: string
  local_cativeiro_endereco: string
  local_cativeiro_numero: string
  local_cativeiro_complemento: string
  local_cativeiro_bairro: string
  local_cativeiro_cidade: string
  local_cativeiro_uf: string
  local_cativeiro_ponto_referencia: string
  local_cativeiro_latitude: string
  local_cativeiro_longitude: string
  local_cativeiro_data_hora: string
  local_cativeiro_cftv: boolean
  local_cativeiro_testemunhas: boolean
  local_encontro_rodovia: string
  local_encontro_cep: string
  local_encontro_endereco: string
  local_encontro_numero: string
  local_encontro_complemento: string
  local_encontro_bairro: string
  local_encontro_cidade: string
  local_encontro_uf: string
  local_encontro_ponto_referencia: string
  local_encontro_latitude: string
  local_encontro_longitude: string
  local_encontro_data_hora: string
  local_encontro_cftv: boolean
  local_encontro_testemunhas: boolean
  local_recuperacao_rodovia: string
  local_recuperacao_cep: string
  local_recuperacao_endereco: string
  local_recuperacao_numero: string
  local_recuperacao_complemento: string
  local_recuperacao_bairro: string
  local_recuperacao_cidade: string
  local_recuperacao_uf: string
  local_recuperacao_ponto_referencia: string
  local_recuperacao_latitude: string
  local_recuperacao_longitude: string
  local_recuperacao_data_hora: string
  local_recuperacao_cftv: boolean
  local_recuperacao_testemunhas: boolean
  formularioDoRelatorio_id: string
  fotos_local_da_abordagem: string[]
  fotos_local_de_cativeiro_e_abandono_do_motorista: string[]
  fotos_local_de_encontro_do_veiculo: string[]
  fotos_local_de_recuperacao_da_carga: string[]
}

export interface Form14ResumoAveriguacoes {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  resumo_averiguacoes: string
  formularioDoRelatorio_id: string
}

export interface Form15RecuperacaoCarga {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  recuperacao_carga_recuperada: boolean
  recuperacao_carga_parcial: boolean
  fato_gerador_recuperacao_carga: string
  formularioDoRelatorio_id: string
}

export interface Form16AnexosFotograficos {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  formularioDoRelatorio_id: string
  anexos_fotograficos: string[]
}

export interface Form17Conclusao {
  id: string
  numero_processo: string
  status: string
  data_cadastro: string
  conclusao_averiguacoes: string
  formularioDoRelatorio_id: string
}
