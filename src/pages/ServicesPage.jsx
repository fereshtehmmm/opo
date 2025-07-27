import React from 'react';

const services = [
  "Design Services",
  "Business Cards",
  "Postcards",
  "Envelopes",
  "Greeting Cards",
  "Banners",
  "Yard Signs",
  "Logo Design Services",
  "All Design Services",
  "Every Door Direct Mail ®",
  "6 x 11 EDDM® Postcards",
  "6.5 x 8 EDDM® Postcards",
  "6.5 x 9 EDDM® Postcards",
  "All EDDM® Services",
  "Mailing Services",
  "4 x 6 Postcards",
  "5 x 7 Postcards",
  "5.5 x 8.5 Postcards",
  "6 x 11 Postcards",
  "All Mailing Services",
  "Direct Marketing Packages",
  "1: 4 x 6 Postcards - 1,000 qty",
  "2: 4 x 6 Postcards - 2,500 qty",
  "3: 4 x 6 Postcards - 5,000 qty",
  "4: 5.5 x 8.5 Postcards - 1,000 qty",
  "5: 5.5 x 8.5 Postcards - 2,500 qty",
  "All Direct Marketing Packages",
  "Other Services",
  "Print Brokers",
  "Free Sample Kit",
];

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <li key={index} className="border p-4 rounded shadow-sm">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
