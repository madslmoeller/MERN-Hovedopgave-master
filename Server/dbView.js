// db.js

module.exports = {
    // Selve ordren
    orders: [{
        id: 'ckhd3ojw1000101l4cqyc93vn',
        handle: 1,
        userId: 'ckhd3p8rx000301l44l6hbscs',
        billingEmail: 'mail@mail.dk',
        billingName: 'Fornavn Efternavn',
        billingCompany: 'Firma 1',
        billingAddress: 'Firmavej 1',
        billingCity: 'Firmaby',
        billingPostCode: '0000',
        billingState: null,
        billingCountry: 'Danmark',
        shippingName: 'Fornavn Efternavn',
        shippingCompany: 'Firma 1',
        shippingAddress: 'Firmavej 1',
        shippingCity: 'Firmaby',
        shippingPostCode: '0000',
        shippingState: null,
        shippingCountry: 'Danmark',
        shippingDate: '2020-11-11',
        createdAt: '2020-11-10',
        updatedAt: '2020-11-10',
    }, ],
    // En one-to-many table, som forbinder en-til-mange varelinjer (orderLineList) med en ordre (orders)
    orderLine: [{
            id: 'ckhd41hqa000701l49szfeba9',
            orderId: 'ckhd3ojw1000101l4cqyc93vn',
            orderLineId: 'ckhd41z1i000901l4fe2b4xw7',
        },
        {
            id: 'ckhd42h73000b01l46x5k25ka',
            orderId: 'ckhd3ojw1000101l4cqyc93vn',
            orderLineId: 'ckhd42r3o000d01l43hf28h6y',
        },
    ],
    // De forskellige varelinjer i en ordre
    orderLineList: [{
            id: 'ckhd41z1i000901l4fe2b4xw7',
            productId: 'ckes849yz000101md82djen90',
            title: 'Gulerødder',
            type: 'Vaskede',
            unit: 'kg',
            unitSize: 1,
            bulkUnit: 'Kasse',
            bulkSize: 10,
            price: 8.75,
            quantity: 5,
        },
        {
            id: 'ckhd41z1i000901l4fe2b4xw7',
            productId: 'ckesaa4b9000101md3iam519p',
            title: 'Kartofler',
            type: 'Nye kartofler',
            unit: 'kg',
            unitSize: 1,
            bulkUnit: 'Kasse',
            bulkSize: 10,
            price: 12.00,
            quantity: 2,
        },
    ],
    user: [{
            id: 'ckf2aggbo000101ji0cs6hovq',
            name: 'Producent A',
            role: 'PRODUCER'
        },
        {
            id: 'ckhd3p8rx000301l44l6hbscs',
            name: 'Kunde A',
            role: 'CUSTOMER'
        }
    ],
    product: [{
            id: 'ckes849yz000101md82djen90',
            producerId: 'ckf2aggbo000101ji0cs6hovq',
            title: 'Gulerødder',
            type: 'Vaskede',
            image: 'https://raahandel.dk/wp-content/uploads/2019/09/DSC07878.jpg',
            category: 'Frugt & Grønt',
            unit: 'kg',
            unitSize: 1,
            bulkUnit: 'Kasse',
            bulkSize: 10,
            price: 8.75,
        },
        {
            id: 'ckesaa4b9000101md3iam519p',
            producerId: 'ckf2aggbo000101ji0cs6hovq',
            title: 'Kartofler',
            type: 'Nye kartofler',
            image: 'https://raahandel.dk/wp-content/uploads/2019/11/IMG_20191112_112733.jpg',
            category: 'Frugt & Grønt',
            unit: 'kg',
            unitSize: 1,
            bulkUnit: 'Kasse',
            bulkSize: 10,
            price: 12.00,
        },
    ]
};