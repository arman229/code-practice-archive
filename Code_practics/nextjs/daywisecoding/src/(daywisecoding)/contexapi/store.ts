export const products:producttype[] = [
    { price: "$1", stocked: false, name: "Apple"},
    { price: "$1", stocked: true, name: "Dragonfruit"},
    { price: "$2", stocked: false, name: "Passionfruit"},
    { price: "$2", stocked: true, name: "Spinach"},
    { price: "$4", stocked: false, name: "Pumpkin"},
    { price: "$1", stocked: true, name: "Peas"},
    { price: "$1", stocked: true, name: "Fish"},
    { price: "$1", stocked: false, name: "Mutton"},
    { price: "$1", stocked: true, name: "Beaf"},
    { price: "$1", stocked: true, name: "Fish"},
    { price: "$1", stocked: false, name: "Mutton"},
    { price: "$1", stocked: true, name: "Beaf"},
    { price: "$1", stocked: true, name: "Fish"},
    { price: "$1", stocked: false, name: "Mutton"},
    { price: "$1", stocked: true, name: "Beaf"},
]

 interface producttype{
    price:string,
    stocked:Boolean,
    name:string,
}
export {producttype}