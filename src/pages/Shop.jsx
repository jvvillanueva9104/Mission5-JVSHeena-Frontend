import React from 'react';
import { Filter } from '../common/Filter';

export default function Shop({ data }) {
  return (
    <div className='mx-24 my-16'>
      <Filter />
      <div className='flex flex-row justify-between my-8'>
        {/* Sort by */}
        <div className='flex flex-row items-center'>
          <label className='text-sm font-medium text-gray-700 mr-4'>
            Sort by
          </label>
          <select className='border-2 rounded-md py-1 w-36' name='totalStorage'>
            <option value='Select'>Select</option>
          </select>
        </div>
        {/* Layout icons */}
        <div></div>
      </div>
      {data && (
        <div className='grid grid-cols-4 gap-4'>
          {data.map((item) => (
            <div key={item.name} className='border rounded-md flex flex-col p-4'>
              <img src={item.url} alt={item.name} />
              <span className='text-md mt-4'>{item.name}</span>
              <span className='text-2xl font-medium text-orange-600'>${item.price}</span>
              <div className='flex flex-row mt-4'>
                <button
                  type='button'
                  className='border-2 rounded-md border-orange-600 text-orange-600 w-full mr-2 px-4 py-1'
                >
                  View details
                </button>
                <button
                  type='button'
                  className='rounded-md bg-orange-600 text-white w-full px-4 py-1'
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
