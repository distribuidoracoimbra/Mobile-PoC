export interface ISystemColor {
    title: 'dark' | 'light';
    priamryColor: string;
    primaryDark: string;
    secondColor: string;
    treeColor: string;
    destaqueColor: string;
    text: {
        primaryColor: string;
        secondColor: string;
        invert: string;
    };
    outline: {
        sucess: '#17B142';
        error: '#c53030';
        default: string;
    };
    images: {
        logoDCoimbra: string;
    };
}

export type ISystemColors = {
    dark: ISystemColor;
    light: ISystemColor;
};

const SystemColors: ISystemColors = {
    dark: {
        title: 'dark',
        priamryColor: '#161730',
        primaryDark: '#0F1132',
        secondColor: '#1C2541',
        treeColor: '#3A506B',
        destaqueColor: '#5BC0BE',
        text: {
            primaryColor: '#fff',
            secondColor: '#898A96',
            invert: '#333',
        },
        outline: {
            sucess: '#17B142',
            error: '#c53030',
            default: '#0c1d49',
        },
        images: {
            logoDCoimbra: 'logoDCoimbraDark.png',
        },
    },
    light: {
        title: 'light',
        priamryColor: '#fff',
        primaryDark: '#f0f0f0',
        secondColor: '#F8FCFD',
        treeColor: '#3A506B',
        destaqueColor: '#5BC0BE',
        text: {
            primaryColor: '#333',
            secondColor: '#303030',
            invert: '#fff',
        },
        outline: {
            sucess: '#17B142',
            error: '#c53030',
            default: '#0c1d49',
        },
        images: {
            logoDCoimbra: 'logoDCoimbraLight.png',
        },
    },
};

export default SystemColors;
