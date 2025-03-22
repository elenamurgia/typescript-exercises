
// // let sales = 123_456_789; // in typescript you can separate a large number with underscore
// // let course = 'Typescript';
// // let is_published = true;

// // let numbers = [1, 2, 3];

// // let user: [number, string] = [1, 'Mosh'];


// // Functions
// function calculateTax(income: number, taxYear: number): number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000, 2022)


// // Objects
// // let employee: {
// //     readonly id: number, 
// //     name: string, 
// //     retire: (date: Date) => void
// // } = {
// //     id: 1, 
// //     name: 'Mosh',
// //     retire: (date: Date) => {
// //         console.log(date);
// //     }
// // }

// // Advanced Types
// type Employee = {
//     readonly id: number, 
//     name: string, 
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1, 
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

// // Union Types
// function kgToLbs(weight: number | string): number {
//     // Narrowing
//     if (typeof weight === 'number') 
//         return weight * 2.2
//     else 
//     return parseInt(weight) * 2.2
// }
// kgToLbs(10);
// kgToLbs('10Kg')

// // Intersection Types
// let weight: number & string;

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize:() => {}
// }

// // Literal types, literal meaningan exact or specific value 

// let quantity: 50 | 100 = 51;
// better way to do the above 
type Quantity = 50 | 100;
let quantity: Quantity = 100;
// literals can also be string 
type Metric = 'cm' | 'inch;'

// Nullable types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Hola!');
}
greet(null);

// Optional chaining 
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

// let customer = getCustomer(0);
// if (customer!== null && customer !==undefined)
//     console.log(customer.birthday);

// Another way to do this is the property access operator 
let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null;
log?.('a');
