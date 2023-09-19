import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export function Filter(props) {
  const {products, setFilteredProducts} = props;
  const [sliderValue, setSliderValue] = useState(50);
  const brandOptions = [
    'Acer',
    'Apple',
    'ASUS',
    'Dell',
    'HP',
    'Lenovo',
    'Microsoft',
    'MSI',
  ];
  const [brandValues, setBrandValues] = useState([]);
  const [displayBrandOptions, setDisplayBrandOptions] = useState(false);
  const sizeOptions = [
    11.6, 12.4, 13.3, 13.4, 13.5, 13.6, 14, 14.4, 14.5, 15, 15.3, 15.5, 15.6,
    16, 17.3,
  ];
  const [minSize, setMinSize] = useState(sizeOptions[0]);
  const [maxSize, setMaxSize] = useState(sizeOptions[sizeOptions.length - 1]);
  const [expandFilter, setExpandFilter] = useState(false);

  const onBrandChange = (brand) => {
    let newBrandValues;
    if (brandValues.includes(brand)) {
      newBrandValues = brandValues.filter(
        (value) => value !== brand
      );
      if (newBrandValues.length === 0) {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter((item) => newBrandValues.includes(item.brand)));
      }
    } else {
      newBrandValues = [...brandValues, brand];
      setFilteredProducts(products.filter((item) => newBrandValues.includes(item.brand)));
    }
    setBrandValues(newBrandValues);
  };

  return (
    <form
      className='border border-solid rounded-md border-orange-600 flex flex-col mx-4 px-12 py-4'
      style={{
        width: '1218px',
        height: '169px',
        top: '250px',
        left: '111px',
        borderRadius: '5px',
      }}
    >
      {/* First row */}
      <div className='flex flex-row mb-4'>
        {/* Price */}
        <div className='flex flex-col flex-grow flex-shrink'>
        <label className='text-sm font-medium text-gray-700 mb-2 roboto-font'>
          Price
        </label>
        <input
          className='flex flex-grow flex-shrink'
          type='range'
          name='price'
          min={1}
          max={100}
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />
        </div>
        {/* Brand */}
        <div className='flex flex-col mx-10'>
          <label className='text-sm font-medium text-gray-700 mb-2 roboto-font'>
            Brand
          </label>
          <div className='relative inline-block text-left'>
          <button
            type='button'
            className="inline-flex w-full justify-center gap-x-3.5 rounded-md bg-neutral-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
            onClick={() => setDisplayBrandOptions((prevVal) => !prevVal)}
          >
            Select 
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
          </div>
          <div
            className={`bg-white flex flex-col p-2 ${
              !displayBrandOptions ? 'hidden' : ''
            }`}
          >
            {brandOptions.map((brand) => (
              <div key={brand} className='flex flex-row'>
                <input
                  type='checkbox'
                  value={brand}
                  checked={brandValues.includes(brand)}
                  onChange={() => onBrandChange(brand)}
                />
                <label className='ml-2'>{brand}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Screen size */}
        <div className='flex flex-col'>
          <label className='text-sm font-medium text-gray-700 mb-2 roboto-font'>
            Screen size
          </label>
          <div className='flex flex-row'>
            <select
              className='inline-flex w-full justify-center gap-x-3.5 rounded-md bg-neutral-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
              name='minSize'
              value={minSize}
              onChange={(e) => setMinSize(e.target.value)}
            >
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}inches
                </option>
              ))}
            </select>
            <span className='mx-2'>━━━</span>
            <select
              className='inline-flex w-full justify-center gap-x-3.5 rounded-md bg-neutral-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
              name='maxSize'
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
            >
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}inches
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Second row */}
      {expandFilter && (
        <div className='flex flex-row mb-4'>
          <div className='flex flex-col mr-8'>
            <label className='text-sm font-medium text-gray-700 mb-2'>
              Total storage
            </label>
            <select
              className='bg-neutral-200 rounded-md py-1 w-36'
              name='totalStorage'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8'>
            <label className='text-sm font-medium text-gray-700 mb-2'>
              RAM storage
            </label>
            <select
              className='bg-neutral-200 rounded-md py-1 w-36'
              name='ramStorage'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8'>
            <label className='text-sm font-medium text-gray-700 mb-2'>
              CPU
            </label>
            <select className='bg-neutral-200 rounded-md py-1 w-36' name='cpu'>
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8'>
            <label className='text-sm font-medium text-gray-700 mb-2'>
              Operating system
            </label>
            <select
              className='bg-neutral-200 rounded-md py-1 w-36'
              name='operatingSystem'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8'>
            <label className='text-sm font-medium text-gray-700 mb-2'>
              Processor type
            </label>
            <select
              className='bg-neutral-200 rounded-md py-1 w-36'
              name='processor'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
        </div>
      )}
      {/* Advanced filter */}
      <div className='flex justify-end'>
        <button
          type='button'
          onClick={() => setExpandFilter((prevVal) => !prevVal)}
        >
          <span className='text-sky-700 underline'>
            {!expandFilter ? 'Advanced Search >' : 'Reset Filter >'}
          </span>
        </button>
      </div>
    </form>
  );
}
