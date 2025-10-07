export const colors = ['white', 'beige', 'blue', 'brown', 'green', 'purple']

export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
//   {
//     id: 'category',
//     name: 'Category',
//     options: [
//       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//       { value: 'sale', label: 'Sale', checked: false },
//       { value: 'travel', label: 'Travel', checked: true },
//       { value: 'organization', label: 'Organization', checked: false },
//       { value: 'accessories', label: 'Accessories', checked: false },
//     ],
//   },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'S', label: 'S' },
      { value: 'M', label: 'M' },
      { value: 'L', label: 'L' },
    ],
  },
//   {
//         id: 'price',
//         name: 'Price',
//         options: [
//             { value: '159-399', label: 'Rs.159 to Rs.399'},
//             { value: '399-999', label: 'Rs.399 to Rs.999'},
//             { value: '999-1999', label: 'Rs.999 to Rs.1999'},
//             { value: '1999-2999', label: 'Rs.1999 to Rs.2999'},
//             { value: '2999-4999', label: 'Rs.2999 to Rs.4999'},
//         ]
//     },
//     {
//         id: 'discount',
//         name: 'Discount Range',
//         options: [
//             { value: '10', label: '10% And Above' },
//             { value: '20', label: '20% And Above' },
//             { value: '30', label: '30% And Above' },
//             { value: '40', label: '40% And Above' },
//             { value: '50', label: '50% And Above' },
//             { value: '60', label: '60% And Above' },
//             { value: '70', label: '70% And Above' },
//             { value: '80', label: '80% And Above' },
//         ]
//     },
//     {
//         id: 'stock',
//         name: 'Stock Availability',
//         options: [
//             { value: 'in_stock', label: 'In Stock'},
//             { value: 'out_of_stock', label: 'Out Of Stock'},
//         ]
//     }
]

export const singleFilter=[
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '159-399', label: 'Rs.159 to Rs.399'},
            { value: '399-999', label: 'Rs.399 to Rs.999'},
            { value: '999-1999', label: 'Rs.999 to Rs.1999'},
            { value: '1999-2999', label: 'Rs.1999 to Rs.2999'},
            { value: '2999-4999', label: 'Rs.2999 to Rs.4999'},
        ]
    },
    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            { value: '10', label: '10% And Above' },
            { value: '20', label: '20% And Above' },
            { value: '30', label: '30% And Above' },
            { value: '40', label: '40% And Above' },
            { value: '50', label: '50% And Above' },
            { value: '60', label: '60% And Above' },
            { value: '70', label: '70% And Above' },
            { value: '80', label: '80% And Above' },
        ]
    },
    {
        id: 'stock',
        name: 'Stock Availability',
        options: [
            { value: 'in_stock', label: 'In Stock'},
            { value: 'out_of_stock', label: 'Out Of Stock'},
        ]
    }
]