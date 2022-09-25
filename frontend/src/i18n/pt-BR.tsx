const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
    more: 'More',
  },

  app: {
    title: 'Siffron',
  },

  api: {
    menu: 'API',
  },

  mui: {
    configurator: {
      title: 'Configurador de painel',
      description: 'Veja nossas opções de painel.',
      sidenavColor: 'Cores',
      sidenavType: {
        title: 'Tipo Sidenav',
        description:
          'Escolha entre diferentes tipos de sidenav.',
        dark: 'Escuro',
        transparent: 'Transparente',
        white: 'Branco',
      },
      navbarFixed: 'Navbar Fixo',
      sidenavMini: 'Sidenav Mini',
      sidenavDark: 'Claro / Escuro',
    },
  },

  collapses: {
    management: {
      menu: 'Management',
    },
  },

  entities: {
    shop: {
      name: 'store',
      label: 'Store',
      menu: 'Store',
      exporterFileName: 'store_export',
      list: {
        menu: 'Store',
        title: 'Store',
      },
      create: {
        success: 'Store successfully saved',
      },
      update: {
        success: 'Store successfully saved',
      },
      destroy: {
        success: 'Store successfully deleted',
      },
      destroyAll: {
        success: 'Store(s) successfully deleted',
      },
      edit: {
        title: 'Edit Store',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        manager: 'Manager',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Store',
      },
      view: {
        title: 'View Store',
      },
      importer: {
        title: 'Import Stores',
        fileName: 'department_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    department: {
      name: 'department',
      label: 'Department',
      menu: 'Department',
      exporterFileName: 'department_export',
      list: {
        menu: 'Department',
        title: 'Department',
      },
      create: {
        success: 'Department successfully saved',
      },
      update: {
        success: 'Department successfully saved',
      },
      destroy: {
        success: 'Department successfully deleted',
      },
      destroyAll: {
        success: 'Department(s) successfully deleted',
      },
      edit: {
        title: 'Edit Department',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        shop: 'Shop',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Department',
      },
      view: {
        title: 'View Department',
      },
      importer: {
        title: 'Import Departments',
        fileName: 'department_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    section: {
      name: 'section',
      label: 'Section',
      menu: 'Section',
      exporterFileName: 'section_export',
      list: {
        menu: 'Section',
        title: 'Section',
      },
      create: {
        success: 'Section successfully saved',
      },
      update: {
        success: 'Section successfully saved',
      },
      destroy: {
        success: 'Section successfully deleted',
      },
      destroyAll: {
        success: 'Section(s) successfully deleted',
      },
      edit: {
        title: 'Edit Section',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        shop: 'Shop',
        department: 'Department',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Section',
      },
      view: {
        title: 'View Section',
      },
      importer: {
        title: 'Import Sections',
        fileName: 'section_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    shelf: {
      name: 'shelf',
      label: 'Shelf',
      menu: 'Shelf',
      exporterFileName: 'shelf_export',
      list: {
        menu: 'Shelf',
        title: 'Shelf',
      },
      create: {
        success: 'Shelf successfully saved',
      },
      update: {
        success: 'Shelf successfully saved',
      },
      destroy: {
        success: 'Shelf successfully deleted',
      },
      destroyAll: {
        success: 'Shelf(s) successfully deleted',
      },
      edit: {
        title: 'Edit Shelf',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        shop: 'Shop',
        department: 'Department',
        section: 'Section',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Shelf',
      },
      view: {
        title: 'View Shelf',
      },
      importer: {
        title: 'Import Shelves',
        fileName: 'shelf_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    facing: {
      name: 'facing',
      label: 'Facing',
      menu: 'Facing',
      exporterFileName: 'facing_export',
      list: {
        menu: 'Facing',
        title: 'Facing',
      },
      create: {
        success: 'Facing successfully saved',
      },
      update: {
        success: 'Facing successfully saved',
      },
      destroy: {
        success: 'Facing successfully deleted',
      },
      destroyAll: {
        success: 'Facing(s) successfully deleted',
      },
      edit: {
        title: 'Edit Facing',
      },
      fields: {
        id: 'Id',
        model: 'Model',
        type: 'Type',
        sn: 'Serial Number',
        shop: 'Shop',
        department: 'Department',
        section: 'Section',
        shelf: 'Shelf',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {
        type: {
          Pusher: 'Pusher',
          Hook: 'Hook',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Facing',
      },
      view: {
        title: 'View Facing',
      },
      importer: {
        title: 'Import Facings',
        fileName: 'facing_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists:
        'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '0',
      unit: '$',
    },
    growth: {
      label: 'Growth',
      price: '10',
      unit: '$',
    },
    enterprise: {
      label: 'Enterprise',
      price: '50',
      unit: '$',
    },

    pricingPeriod: 'mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    tenant: 'Tenant',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min: '${path} deve possuir ao menos ${min} caracteres',
      max: '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim: '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size: 'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint: 'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  customViewer: {
    default: 'No Data',
    noData: 'No {0}',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
