import React from 'react';

const socialServices = [
  'Instagram Ads',
  'TikTok Promotions',
  'LinkedIn Campaigns',
];

const SocialServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Social Services</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {socialServices.map((service, index) => (
          <li key={index} className="border p-4 rounded shadow-sm">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialServicesPage;
