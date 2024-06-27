import {
    type Item,
    type AudioMicItem,
    type AudioSpeakerItem,
    type AudioConsoleItem,
    type EnergyItem,
    type LightningBulbItem,
    type LightningConsoleItem,
    type VideoScreenItem,
    type VideoCameraItem,
    type VideoConsoleItem,
    type StructureItem,
    type CableItem,
    type OtherItem,
} from '../types/interfaces';

export default class Article implements Item {
    id: string;
    model: string;
    brand: string;
    quantity: number;
    category: string;

    constructor(id: string, model: string, brand: string, quantity: number, category: string) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.quantity = quantity;
        this.category = category;
    }
}

// Clases de Audio

export class AudioMic extends Article implements AudioMicItem {
    audioCategory: string;
    micType: string;
    polarPattern: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        audioType: string,
        micType: string,
        polarPattern: string,
    ) {
        super(id, model, brand, quantity, category);
        this.audioCategory = audioType;
        this.micType = micType;
        this.polarPattern = polarPattern;
    }
}

export class AudioSpeaker extends Article implements AudioSpeakerItem {
    audioCategory: string;
    speakerType: string;
    diameter: number;
    power: number;
    energyConnection: string;
    audioConnection: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        audioType: string,
        diameter: number,
        power: number,
        speakerType: string,
        energyConnection: string,
        audioConnection: string,
    ) {
        super(id, model, brand, quantity, category);
        this.audioCategory = audioType;
        this.diameter = diameter;
        this.power = power;
        this.speakerType = speakerType;
        this.energyConnection = energyConnection;
        this.audioConnection = audioConnection;
    }
}

export class AudioConsole extends Article implements AudioConsoleItem {
    audioCategory: string;
    consoleType: string;
    channelQty: number;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        audioType: string,
        consoleType: string,
        channelQty: number,
    ) {
        super(id, model, brand, quantity, category);
        this.audioCategory = audioType;
        this.consoleType = consoleType;
        this.channelQty = channelQty;
    }
}

// Clases de iluminación

export class LightningBulb extends Article implements LightningBulbItem {
    lightningCategory: string;
    lightningType: string;
    consumption: number;
    power: number;
    energyConnection: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string, // Iluminación
        lightningCategory: string, // Tipo de iluminación (foco, consola, etc)
        lightningType: string, // Tipo de foco (led, halógeno, etc)
        focusType: string, // Tipo de foco (beam, wash, etc)
        consumption: number, // Consumo en watts
        power: number, // Potencia en lumens
        energyConnection: string, // Tipo de conexión eléctrica
    ) {
        super(id, model, brand, quantity, category);
        this.lightningCategory = lightningCategory;
        this.lightningType = lightningType;
        this.focusType = focusType;
        this.consumption = consumption;
        this.power = power;
        this.energyConnection = energyConnection;
    }
    focusType: string;
}

export class LightningConsole extends Article implements LightningConsoleItem {
    lightningCategory: string;
    consoleType: string;
    universeQty: number;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        lightningCategory: string,
        consoleType: string,
        universeQty: number,
    ) {
        super(id, model, brand, quantity, category);
        this.lightningCategory = lightningCategory;
        this.consoleType = consoleType;
        this.universeQty = universeQty;
    }
}

export class EnergyArticle extends Article implements EnergyItem {
    category: string;
    amperage?: number;
    voltage?: number;
    takeType?: number;
    takeQuantity?: number;
    outQuantity?: number;
    outType?: number;
    certified: boolean;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        type: string,
        category: string,
        amperage: number,
        voltage: number,
        takeType: number,
        takeQuantity: number,
        outQuantity: number,
        outType: number,
        certified: boolean,
    ) {
        super(id, model, brand, quantity, type);
        this.category = category;
        this.amperage = amperage;
        this.voltage = voltage;
        this.takeType = takeType;
        this.takeQuantity = takeQuantity;
        this.outQuantity = outQuantity;
        this.outType = outType;
        this.certified = certified;
    }
}

// Clases de video

export class VideoScreen extends Article implements VideoScreenItem {
    videoCategory: string;
    pixels: string;
    size: string;
    cardType: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        videoCategory: string,
        pixels: string,
        size: string,
        cardType: string,
    ) {
        super(id, model, brand, quantity, category);
        this.videoCategory = videoCategory;
        this.pixels = pixels;
        this.size = size;
        this.cardType = cardType;
    }
}

export class VideoCamera extends Article implements VideoCameraItem {
    videoCategory: string;
    resolution: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        videoCategory: string,
        resolution: string,
    ) {
        super(id, model, brand, quantity, category);
        this.videoCategory = videoCategory;
        this.resolution = resolution;
    }
}

export class VideoConsole extends Article implements VideoConsoleItem {
    videoCategory: string;
    functionality: string;
    inputQty: number;
    outputQty: number;
    mainInOutType: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        videoCategory: string,
        functionality: string,
        inputQty: number,
        outputQty: number,
        mainInOutType: string,
    ) {
        super(id, model, brand, quantity, category);
        this.videoCategory = videoCategory;
        this.functionality = functionality;
        this.inputQty = inputQty;
        this.outputQty = outputQty;
        this.mainInOutType = mainInOutType;
    }
}

export class StructureArticle extends Article implements StructureItem {
    structureCategory: string;
    length?: number;
    diameter?: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        structureCategory: string,
        length?: number,
        diameter?: string,
    ) {
        super(id, model, brand, quantity, category);
        this.structureCategory = structureCategory;
        this.length = length;
        this.diameter = diameter;
    }
}

export class CableArticle extends Article implements CableItem {
    length: number;
    diameter: string;
    connector1: string;
    connector2: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        length: number,
        diameter: string,
        connector1: string,
        connector2: string,
    ) {
        super(id, model, brand, quantity, category);
        this.length = length;
        this.diameter = diameter;
        this.connector1 = connector1;
        this.connector2 = connector2;
    }
}

export class OtherArticle extends Article implements OtherItem {
    description: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        description: string,
    ) {
        super(id, model, brand, quantity, category);
        this.description = description;
    }
}
