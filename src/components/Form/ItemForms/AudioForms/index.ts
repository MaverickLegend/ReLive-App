import type { Categories } from '../..';

interface AudioCategories {
    audioCategory: Categories[];
    micType: Categories[];
    polarPattern: Categories[];
    consoleType: Categories[];
    speakerType: Categories[];
    energyConnection: Categories[];
    signalConnection: Categories[];
}

export const audioCategories: AudioCategories = {
    audioCategory: [
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
    ],
    consoleType: [
        { label: 'Digital', value: 'Digital' },
        { label: 'Analógica', value: 'Analog' },
    ],
    speakerType: [
        { label: 'Activo', value: 'Active' },
        { label: 'Pasivo', value: 'Passive' },
    ],
    energyConnection: [
        { label: 'PowerCon', value: 'PowerCon' },
        { label: 'Interlock', value: 'Interlock' },
    ],
    signalConnection: [
        { label: 'XLR', value: 'XLR' },
        { label: 'Speakon', value: 'Speakon' },
    ],
};
