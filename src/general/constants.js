export const testData = {
    'name': 'Test spread operator',
    'data': 'This is spread operator text',
    'date': Date.now(),
}

// 1 use-state-basics.js
export const useStateHookInitialData = 'Use State Hook is the hook used for setting the state of an attribute'
export const useStateHookUpdatedData = 'Use State Called and Component Rendered'

// 2.0 use-state-adv.js & 2.1 use-state-adv.js & 2.2 use-state-adv.js
export const useStateAdvInitialData = {
    'name': 'Test',
    'age': 28,
    'date': '23/03/93',
    'type': 'Programmer'
}

export const useStateAdvUpdatedData = {
    'name': 'Sample',
    'age': 25,
    'date': '05/10/95',
    'type': 'Management'
}

// 1 use-effect-basics.js
export const useEffectDef = 'Use Effect is called after every re render including first render'
export const useEffectRules = 'Can not be inside a function, Can not use useState inside useEffect it will create infinite loop, Can not wrap use effect inside a conditional statement'

// 2.1 use-effect-adv.js
export const useEffectInitData = {
    'song': 'Happier',
    'by': 'Marshmello ft. Bastille'
};

export const useEffectUpdatedData = {
    'song': 'Lost Cause',
    'by': 'Billie Eilish'
};

export const useEffectCarInitData = {
    'model': 'Mustang',
    'maker': 'Ford'
};

export const useEffectCarUpdatedData = {
    'model': 'Corvette',
    'maker': 'Chevrolet'
};

export const people = [
    {
        id: 1,
        name: 'Jhon',

    },
    {
        id: 2,
        name: 'Hal',
    },
    {
        id: 3,
        name: 'Austin',
    },
    {
        id: 4,
        name: 'Ashly',
    },
]
