// Traducciones de campos
export const fieldTranslations: Record<string, string> = {
    model: 'Modelo',
    brand: 'Marca',
    quantity: 'Cantidad',
    category: 'Categoría',
    audioCategory: 'Categoría de Audio',
    speakerType: 'Tipo de Altavoz',
    power: 'Potencia',
    diameter: 'Diámetro',
    energyConnection: 'Conexión de Energía',
    audioConnection: 'Conexión de Audio',
    micType: 'Tipo de Micrófono',
    polarPattern: 'Patrón Polar',
    consoleType: 'Tipo de Consola',
    channelQty: 'Cantidad de Canales',
    amperage: 'Amperaje',
    voltage: 'Voltaje',
    takeType: 'Tipo de Toma',
    takeQuantity: 'Cantidad de Tomas',
    outQuantity: 'Cantidad de Salidas',
    outType: 'Tipo de Salida',
    certified: 'Certificado',
    lightningCategory: 'Categoría de Iluminación',
    bulbType: 'Tipo de Foco',
    focusType: 'Tipo de Luz',
    wattage: 'Potencia',
    universeQty: 'Cantidad de Universos',
    pixels: 'Pixeles',
    size: 'Tamaño',
    cardType: 'Tipo de Tarjeta',
    resolution: 'Resolución',
    functionality: 'Funcionalidad',
    inputQty: 'Entradas',
    outputQty: 'Salidas',
    mainInOutType: 'Entrada/Salida Principal',
    structureCategory: 'Categoría de Estructura',
    length: 'Longitud',
    connector1: 'Conector 1',
    connector2: 'Conector 2',
    description: 'Descripción',
};

// Traducciones de valores internos
export const valueTranslations: Record<string, Record<string, string>> = {
    audioCategory: {
        microphone: 'Micrófono',
        speaker: 'Altavoz',
        console: 'Consola',
        other: 'Otros',
    },
    speakerType: {
        active: 'Activo',
        passive: 'Pasivo',
    },
    micType: {
        condensator: 'Condensador',
        dynamic: 'Dinámico',
        lapel: 'Solapa',
        other: 'Otros',
    },
    polarPattern: {
        cardioid: 'Cardioide',
        omnidirectional: 'Omnidireccional',
        bidirectional: 'Bidireccional',
        hypercardioid: 'Hipercardioide',
        subcardioid: 'Subcardioide',
        supercardioid: 'Supercardioide',
        unidirectional: 'Unidireccional',
    },
    certified: {
        true: 'Sí',
        false: 'No',
    },
};
