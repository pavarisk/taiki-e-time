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
        },
        {
          id: 4,
          factType: 'Tairawhiti Fact',
          factDetails: 'Gisborne headcount nearly double the Gisborne population over New Years Period',
          image: '/images/rnv.jpg',
          reference: 'prototype_test'
        },
        {
          id: 5,
          factType: 'Property Fact',
          factDetails: 'In the 2018 census Gisborne region had over 16,000 households',
          image: '/images/gisborne-region.png',
          reference: 'https://en.wikipedia.org/wiki/Gisborne_District'
        },
        {
          id: 6,
          factType: 'Food Fact',
          factDetails: 'There are over 70 restaurants listed in Gisborne on TripAdvisor',
          image: '/images/the-works.jpg',
          reference: 'https://www.tripadvisor.co.nz'
        },
        {
          id: 7,
          factType: 'Tairawhiti Fact',
          factDetails: 'The region is sheltered by high country to the west and has a sunny climate with a yearly average of 2,200 sunshine hours.',
          image: '/images/sunny-city.jpg',
          reference: 'https://kids.kiddle.co/Gisborne,_New_Zealand'
        },
        {
          id: 8,
          factType: 'Property Fact',
          factDetails: 'There were only 7 property listed for rent on TradeMe in Gisborne region on 28/06/21',
          image: '/images/trademe_280621.png',
          reference: 'TradeMe'
        },
        {
          id: 9,
          factType: 'Food Fact',
          factDetails: 'Gear Meat Pies have the best Mince and Cheese pie in Gisborne',
          image: '/images/gear-meat.jpg',
          reference: 'My Fact'
        },
        {
          id: 10,
          factType: 'Tairawhiti Fact',
          factDetails: 'Gisborne is the first place in New Zealand to see the sun.',
          image: '/images/first-sunrise.jpg',
          reference: 'https://www.gorentals.co.nz/explore/blog/the-worlds-first-sunrise-east-cape/'
        }
      ])
    })
}
