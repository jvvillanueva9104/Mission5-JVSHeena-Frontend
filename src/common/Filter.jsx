import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import MultiRangeSlider from '../components/MultiRangeSlider';

export function Filter(props) {
  const { products, setFilteredProducts } = props;
  // const [sliderValue, setSliderValue] = useState(50);
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
    'Select',
    11.6,
    12.4,
    13.3,
    13.4,
    13.5,
    13.6,
    14,
    14.4,
    14.5,
    15,
    15.3,
    15.5,
    15.6,
    16,
    17.3,
    'Select',
  ];
  const [minSize, setMinSize] = useState(sizeOptions[0]);
  const [maxSize, setMaxSize] = useState(sizeOptions[sizeOptions.length - 1]);
  const [expandFilter, setExpandFilter] = useState(false);

  const onBrandChange = (brand) => {
    let newBrandValues;
    if (brandValues.includes(brand)) {
      newBrandValues = brandValues.filter((value) => value !== brand);
      if (newBrandValues.length === 0) {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((item) => newBrandValues.includes(item.brand))
        );
      }
    } else {
      newBrandValues = [...brandValues, brand];
      setFilteredProducts(
        products.filter((item) => newBrandValues.includes(item.brand))
      );
    }
    setBrandValues(newBrandValues);
  };

  return (
    <form
      className='border border-solid rounded-md border-[#E1843C] flex flex-col m-4 px-12 py-4'
      style={{
        minWidth: '1218px',
        minHeight: '169px',
        top: '250px',
        left: '111px',
        borderRadius: '5px',
      }}
    >
      {/* First row */}
      <div className='flex flex-row px-4'>
        {/* Price */}
        <div className='pr-20'>
          <label className='text-[#000000] mb-2 roboto-font-18'>Price</label>
          <MultiRangeSlider
            min={300}
            max={3000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        {/* Brand */}
        <div className='flex flex-col px-20'>
          <label className='text-[#000000] mb-2 roboto-font-18'>Brand</label>
          <div className='relative inline-block text-left'>
            <button
              type='button'
              className='inline-flex w-full justify-center gap-x-20 rounded-md bg-neutral-200 px-3 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300'
              onClick={() => setDisplayBrandOptions((prevVal) => !prevVal)}
            >
              Select
              <ChevronDownIcon
                className='-mr-1 h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
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
        <div className='flex flex-col pl-20'>
          <label className='text-[#000000] mb-2 roboto-font-18'>
            Screen size
          </label>
          <div className='flex flex-row'>
            <select
              className='justify-center  rounded-md bg-neutral-200 px-14 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300'
              name='minSize'
              value={minSize}
              onChange={(e) => setMinSize(e.target.value)}
            >
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className='mx-2'>━━━</span>
            <select
              className='justify-center  rounded-md bg-neutral-200 px-14 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300'
              name='maxSize'
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
            >
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Advanced filter */}
      <div className='flex justify-end mt-10'>
        <button
          type='button'
          onClick={() => setExpandFilter((prevVal) => !prevVal)}
        >
          <span className='text-sky-700 underline'>
            {!expandFilter ? 'Advanced Search >' : 'Reset Filter >'}
          </span>
        </button>
      </div>

      {/* Second row */}
      {expandFilter && (
        <div className='flex flex-row mb-4'>
          <div className='flex flex-col mr-8'>
            <label className='text-[#000000] mb-2 roboto-font-18'>
              Total storage
            </label>
            <select
              className='inline-flex w-full justify-center gap-x-20 rounded-md bg-neutral-200 px-12 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300'
              name='totalStorage'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8 pl-10'>
            <label className='text-[#000000] mb-2 roboto-font-18'>
              RAM storage
            </label>
            <select
              className='inline-flex w-full justify-center gap-x-20 rounded-md bg-neutral-200 px-12 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300'
              name='ramStorage'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8 pl-10'>
            <label className='text-[#000000] mb-2 roboto-font-18'>CPU</label>
            <select className='inline-flex w-full justify-center gap-x-20 rounded-md bg-neutral-200 px-12 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300' name='cpu'>
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8 pl-10'>
            <label className='text-[#000000] mb-2 roboto-font-18'>
              Operating system
            </label>
            <select
              className='inline-flex w-full justify-center gap-x-20 rounded-md bg-neutral-200 px-12 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300'
              name='operatingSystem'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
          <div className='flex flex-col mr-8 pl-10'>
            <label className='text-[#000000] mb-2 roboto-font-18'>
              Processor type
            </label>
            <select
              className='inline-flex w-full justify-center gap-x-20 rounded-md bg-neutral-200 px-12 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300'
              name='processor'
            >
              <option value='Select'>Select</option>
            </select>
          </div>
        </div>
      )}
    </form>
  );
}
