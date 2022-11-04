const people1 = [{
    name: 'Alex',
    know: ['Eva', 'Jhon'],
},
{
    name: 'Ivan',
    know: ['Jhon', 'Alex']
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Jhon',
    know: ['Alex']
},
]
//  Expected result: Not found


const people2 = [{
    name: 'Alex',
    know: ['Eva', 'Jhon'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: []
},
{
    name: 'Ivan',
    know: ['Jhon', 'Alex']
},
];
//  Expected result: Not found



const people3 = [{
    name: 'Alex',
    know: ['Eva', 'Jhon'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Ivan',
    know: ['Jhon', 'Alex']
},
];
//  Expected result: Jhon


const people4 = [{
    name: 'Alex',
    know: ['Eva', 'Jhon'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Ivan',
    know: ['Alex']
},
];
//  Expected result: Not found


function findNarciss(array) {
    const possibleNarciss = array.filter(({ name, know }) => know.length === 0);

    if (possibleNarciss.length === 0) {
        console.log(`Not found`);
        return
    }

    const peopleWhichKnowPossibleNarciss = array.filter(({ name, know }) => know.includes(possibleNarciss[0].name));

    if (peopleWhichKnowPossibleNarciss.length === (array.length - 1)) {
        console.log(`NARCISS DETECTED: ${possibleNarciss[0].name}`);
        return;
    }
    console.log(`Not found`);

}

console.log(findNarciss(people3));