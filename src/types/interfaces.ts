export interface Item {
    id: number; // Identificador único
    model: string; // Modelo
    brand: string; // Marca
    quantity: number; // Cantidad
    type: string; // Audio, energía, iluminación, video, otros
}

export interface AudioItem extends Item {
    audioType: string; // Micrófono, altavoz, consola, otros
    micType?: string; // Condensador, dinámico, solapa, otros
    polarPattern?: string; // Cardioide, omnidireccional, bidireccional, hipercardioide, subcardioide, supercardioide, unidireccional
    speakerType?: string; // Activo, pasivo
    power?: number; // Potencia en caso de altavoz
    diameter?: number; // Diámetro en caso de altavoz
    consoleType?: string; // Digital, análogo
    channelQty?: number; // Cantidad de canales en caso de consola
    other?: string; // Personalizado
}

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

export interface LightingItem extends Item {
    category: string; // Par, fresnel, led, consola, etcétera
    lightingType?: string; // Tipo de luz
    consumption?: number; // Consumo
}

export interface VideoItem extends Item {
    category: string; // Módulo, consola, cámara, etcétera
    resolution?: string; // Resolución
    pixels?: string; // pixeles
}

export interface StructureItem extends Item {
    category: string; // Estructura, truss, etcétera
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
