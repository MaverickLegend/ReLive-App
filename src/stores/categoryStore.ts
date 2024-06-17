import { defineStore } from 'pinia';

interface Category {
    label: string;
    value: string;
}

interface Categories {
    audioCategories: {
        audioTypeCat: Category[];
        micType: Category[];
        polarPattern: Category[];
        speakerType: Category[];
        consoleType: Category[];
    };
    energyCategories: {
        category: Category[];
        amperage: Category[];
        voltage: Category[];
        takeType: Category[];
    };
    lightingCategories: {
        category: Category[];
        focusType: Category[];
        power: Category[];
    };
    videoCategories: {
        category: Category[];
    };
    structureItem: {
        category: Category[];
    };
    cableItem: {
        type: Category[];
    };
}

export const useCategoryStore = defineStore('categoryStore', {
    state: (): Categories => ({
        audioCategories: {
            audioTypeCat: [
                { label: 'Micrófono', value: 'Microphone' },
                { label: 'Altavoz', value: 'Speaker' },
                { label: 'Consola', value: 'Console' },
                { label: 'Otros', value: 'Others' },
            ],
            micType: [
                { label: 'Condensador', value: 'Condenser' },
                { label: 'Dinámico', value: 'Dynamic' },
                { label: 'Solapa', value: 'Ribbon' },
                { label: 'Otros', value: 'Others' },
            ],
            polarPattern: [
                { label: 'Cardioide', value: 'Cardioid' },
                { label: 'Omnidireccional', value: 'Omnidirectional' },
                { label: 'Bidireccional', value: 'Bidirectional' },
                { label: 'Hipercardioide', value: 'Hypercardioid' },
                { label: 'Subcardioide', value: 'Subcardioid' },
                { label: 'Supercardioide', value: 'Supercardioid' },
                { label: 'Unidireccional', value: 'Unidirectional' },
            ],
            speakerType: [
                { label: 'Activo', value: 'Active' },
                { label: 'Pasivo', value: 'Passive' },
            ],
            consoleType: [
                { label: 'Digital', value: 'Digital' },
                { label: 'Análogo', value: 'Analog' },
            ],
        },
        energyCategories: {
            category: [
                { label: 'Tablero', value: 'Board' },
                { label: 'Generador', value: 'Generator' },
                { label: 'Otros', value: 'Others' },
            ],
            amperage: [
                { label: '16', value: '16' },
                { label: '32', value: '32' },
                { label: '63', value: '63' },
            ],
            voltage: [
                { label: '110', value: '110' },
                { label: '220', value: '220' },
                { label: '440', value: '440' },
                { label: '660', value: '660' },
                { label: '880', value: '880' },
                { label: '1100', value: '1100' },
            ],
            takeType: [
                { label: 'Monofásico', value: 'Single-phase' },
                { label: 'Bifásico', value: 'Two-phase' },
                { label: 'Trifásico', value: 'Three-phase' },
            ],
        },
        lightingCategories: {
            category: [
                { label: 'Seguidor', value: 'Follower' },
                { label: 'Consola', value: 'Console' },
                { label: 'Otros', value: 'Others' },
            ],
            focusType: [
                { label: 'Par', value: 'Par' },
                { label: 'Fresnel', value: 'Fresnel' },
                { label: 'Cob', value: 'Cob' },
                { label: 'Beam', value: 'Beam' },
                { label: 'Wash', value: 'Wash' },
            ],
            power: [
                { label: '50', value: '50' },
                { label: '100', value: '100' },
                { label: '200', value: '200' },
                { label: '400', value: '400' },
                { label: '800', value: '800' },
                { label: '1000', value: '1000' },
            ],
        },
        videoCategories: {
            category: [
                { label: 'Módulo', value: 'Module' },
                { label: 'Consola', value: 'Console' },
                { label: 'Cámara', value: 'Camera' },
                { label: 'Otros', value: 'Others' },
            ],
        },
        structureItem: {
            category: [
                { label: 'Truss', value: 'Truss' },
                { label: 'Base Truss', value: 'Base Truss' },
                { label: 'Pata Truss', value: 'Pata Truss' },
                { label: 'Fénix', value: 'Fénix' },
                { label: 'Cubo', value: 'Cubo' },
                { label: 'Tecle', value: 'Tecle' },
                { label: 'Motor', value: 'Motor' },
            ],
        },
        cableItem: {
            type: [
                { label: 'XLR', value: 'XLR' },
                { label: 'DMX', value: 'DMX' },
                { label: 'TS', value: 'TS' },
                { label: 'TRS', value: 'TRS' },
                { label: 'BNC', value: 'BNC' },
                { label: 'PowerCon', value: 'PowerCon' },
                { label: 'SpeakOn', value: 'SpeakOn' },
                { label: 'HDMI', value: 'HDMI' },
                { label: 'VGA', value: 'VGA' },
                { label: 'USB', value: 'USB' },
                { label: 'Ethernet', value: 'Ethernet' },
                { label: '10 Amperes', value: '10 Amp' },
                { label: '16 Amperes', value: '16 Amp' },
                { label: '32 Amperes', value: '32 Amp' },
                { label: '63 Amperes', value: '63 Amp' },
                { label: 'Power Strip', value: 'Power Strip' },
                { label: 'Custom', value: 'Custom' },
            ],
        },
    }),
});
