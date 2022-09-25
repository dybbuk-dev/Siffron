const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
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
      title: 'Configurador de tablero',
      description: 'Vea nuestras opciones de tablero.',
      sidenavColor: 'Colores',
      sidenavType: {
        title: 'Tipo Sidenav',
        description:
          'Elige entre diferentes tipos de sidenav.',
        dark: 'Oscuro',
        transparent: 'Transparente',
        white: 'Blanco',
      },
      navbarFixed: 'Navbar Fixed',
      sidenavMini: 'Sidenav Mini',
      sidenavDark: 'Claro / Oscuro',
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
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },

  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url: 'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },

  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },

  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },

  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    tenant: 'Tenant',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imágenes de fondo',
      shade: 'Sombra',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max: '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max: 'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size: 'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint: 'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  customViewer: {
    default: 'No Data',
    noData: 'No {0}',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default es;
