import {
    type Item,
    type AudioItem,
    type EnergyItem,
    type LightingItem,
    type VideoItem,
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

export class AudioArticle extends Article implements AudioItem {
    audioType: string;
    micType?: string;
    polarPattern?: string;
    speakerType?: string;
    diameter?: number;
    power?: number;
    consoleType?: string;
    channelQty?: number;
    other?: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        category: string,
        audioType: string,
        diameter?: number,
        power?: number,
        polarPattern?: string,
        micType?: string,
        speakerType?: string,
        consoleType?: string,
        channelQty?: number,
        other?: string,
    ) {
        super(id, model, brand, quantity, category);
        this.audioType = audioType;
        this.diameter = diameter;
        this.power = power;
        this.polarPattern = polarPattern;
        this.micType = micType;
        this.speakerType = speakerType;
        this.consoleType = consoleType;
        this.channelQty = channelQty;
        this.other = other;
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

export class LightingArticle extends Article implements LightingItem {
    category: string;
    lightingType?: string;
    consumption?: number;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        type: string,
        category: string,
        lightingType?: string,
        consumption?: number,
    ) {
        super(id, model, brand, quantity, type);
        this.category = category;
        this.lightingType = lightingType;
        this.consumption = consumption;
    }
}

export class VideoArticle extends Article implements VideoItem {
    category: string;
    resolution?: string;
    pixels?: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        type: string,
        category: string,
        resolution?: string,
        pixels?: string,
    ) {
        super(id, model, brand, quantity, type);
        this.category = category;
        this.resolution = resolution;
        this.pixels = pixels;
    }
}

export class StructureArticle extends Article implements StructureItem {
    category: string;
    length?: number;
    diameter?: string;

    constructor(
        id: string,
        model: string,
        brand: string,
        quantity: number,
        type: string,
        category: string,
        length?: number,
        diameter?: string,
    ) {
        super(id, model, brand, quantity, type);
        this.category = category;
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
        type: string,
        length: number,
        diameter: string,
        connector1: string,
        connector2: string,
    ) {
        super(id, model, brand, quantity, type);
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
        type: string,
        description: string,
    ) {
        super(id, model, brand, quantity, type);
        this.description = description;
    }
}
