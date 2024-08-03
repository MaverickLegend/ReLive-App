export interface Item {
    model: string; // Modelo
    brand: string; // Marca
    quantity: number; // Cantidad
    category: string; // Audio, energía, iluminación, video, otros
}

// ---------------- Categoría Audio ----------------

export interface AudioSpeakerItem extends Item {
    audioCategory: string; // Micrófono, altavoz, consola, otros
    speakerType: string; // Activo, pasivo
    power: number; // Potencia
    diameter: number; // Diámetro
    energyConnection: string; // Conexión de energía
    audioConnection: string; // Conexión de audio
}

export interface AudioMicItem extends Item {
    audioCategory: string; // Micrófono, altavoz, consola, otros
    micType: string; // Condensador, dinámico, solapa, otros
    polarPattern: string; // Cardioide, omnidireccional, bidireccional, hipercardioide, subcardioide, supercardioide, unidireccional
}

export interface AudioConsoleItem extends Item {
    audioCategory: string; // Micrófono, altavoz, consola, otros
    consoleType: string; // Digital, análogo
    channelQty: number; // Cantidad de canales
}

//  ---------------- Categoría Energía ----------------

export interface EnergyItem extends Item {
    category: string; // Tablero, generador, etcétera
    amperage?: number; // Amperaje
    voltage?: number; // Voltaje
    takeType?: number; // Tipo de toma
    takeQuantity?: number; // Cantidad de tomas
    outQuantity?: number; // Cantidad de salidas
    outType?: number; // Tipo de salida
    certified: boolean; // Certificado
}

export interface EnergyBoardItem extends Item {
    category: string; // Tablero, generador, etcétera
    amperage: number; // Amperaje
    voltage: number; // Voltaje
    takeType: number; // Tipo de toma
    takeQuantity: number; // Cantidad de tomas
    outQuantity: number; // Cantidad de salidas
    outType: number; // Tipo de salida
    certified: boolean; // Certificado
}

//  ---------------- Categoría Iluminación ----------------

export interface LightningBulbItem extends Item {
    lightningCategory: string; // Foco, consola, etcétera
    bulbType: string; // Tipo de luz
    focusType: string; // Tipo de foco
    amperage: number; // Consumo
    wattage: number; // Potencia
    energyConnection: string; // Conexión de energía
}

export interface LightningConsoleItem extends Item {
    lightningCategory: string; // Par, fresnel, led, consola, etcétera
    consoleType: string; // Digital, análogo
    universeQty: number; // Cantidad de universos
}

//  ---------------- Categoría Video ----------------

export interface VideoScreenItem extends Item {
    videoCategory: string; // Módulo, consola, cámara, etcétera
    pixels: string; // pixeles
    size: string; // Tamaño
    cardType: string; // Tipo de tarjeta
}
export interface VideoCameraItem extends Item {
    videoCategory: string; // Módulo, consola, cámara, etcétera
    resolution: string; // Resolución
}

export interface VideoConsoleItem extends Item {
    videoCategory: string; // Módulo, consola, cámara, etcétera
    functionality: string; // Digital, análogo
    inputQty: number; // Cantidad de entradas
    outputQty: number; // Cantidad de salidas
    mainInOutType: string; // Tipo de entrada/salida principal
}

export interface StructureItem extends Item {
    structureCategory: string; // Estructura, truss, etcétera
    length?: number; // Longitud
    diameter?: string; // Diámetro
}

export interface CableItem extends Item {
    length: number;
    diameter: string;
    connector1: string;
    connector2: string;
}

export interface OtherItem extends Item {
    description: string;
}

export type Article =
    | AudioSpeakerItem
    | AudioMicItem
    | AudioConsoleItem
    | EnergyItem
    | EnergyBoardItem
    | LightningBulbItem
    | LightningConsoleItem
    | VideoScreenItem
    | VideoCameraItem
    | VideoConsoleItem
    | StructureItem
    | CableItem
    | OtherItem;
