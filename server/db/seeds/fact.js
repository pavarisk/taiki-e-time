exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Facts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Facts').insert([
        {
          id: 1,
          factType: 'Food Fact',
          factDetails: 'The best Fish n Chip shop is London Street Fish and Chips!',
          image: '/images/london-fc.png',
          reference: 'prototype_test'
        },
        {
          id: 2,
          factType: 'Property Fact',
          factDetails: 'An average property price in Gisborne region is estimated at over half a million dollars.',
          image: '/images/housing-fact.jpg',
          reference: 'prototype_test'
        },
        {
          id: 3,
          factType: 'Tairawhiti Fact',
          factDetails: 'Gisborne is also known in Māori as Tūranga-nui-a-Kiwa, which translated to "Great standing place of Kiwa"',
          image: '/images/gisborne.jpg',
          reference: 'prototype_test'
        }
      ])
    })
}
