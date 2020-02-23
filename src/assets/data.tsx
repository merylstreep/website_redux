//@flow

enum ELEMENT {
    WATER,
    FIRE,
    EARTH,
    AIR
}

enum GENDER {
    MALE,
    FEMALE,
    OTHER
}

type dataType = {
    name: string,
    id: string,
    element: ELEMENT,
    gender: GENDER
};

export const data: Array<dataType> = [
    {
        name: "Harry",
        id: '001',
        element: ELEMENT.WATER,
        gender: GENDER.MALE
    },
    {
        name: "Sam",
        id: '002',
        element: ELEMENT.EARTH,
        gender: GENDER.MALE
    },
    {
        name: "Drew",
        id: '003',
        element: ELEMENT.AIR,
        gender: GENDER.FEMALE
    },
    {
        name: "Alice",
        id: '004',
        element: ELEMENT.WATER,
        gender: GENDER.FEMALE
    },
    {
        name: "Katy",
        id: '005',
        element: ELEMENT.FIRE,
        gender: GENDER.OTHER
    },
    {
        name: "Peter",
        id: '006',
        element: ELEMENT.EARTH,
        gender: GENDER.OTHER
    },
    {
        name: "Harry 2",
        id: '007',
        element: ELEMENT.FIRE,
        gender: GENDER.OTHER
    }
];

