import React from 'react';
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-tailwind/react';
import Slider from 'react-slider';

function FilterSection() {
  return (
    <div className='mx-auto border border-solid border-[#E1843C] m-10 p-10 max-w-[60%]'>
      <div className='flex space-x-4'>
        <div className='w-1/2'>
          <label
            htmlFor='selectedBrand'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Price
          </label>
          <input type='range' min={1} max={100} />
        </div>

        {/* Brand Section */}
        <div className='w-1/2'>
          <div className='collapse'>
            <label
              htmlFor='selectedBrand'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Brand
            </label>
            <span className='dropdown'>
              <Menu
                dismiss={{
                  itemPress: false,
                }}
              >
                <MenuHandler>
                  <Button
                    className='relative text-gray-500 px-8 py-3'
                    style={{ backgroundColor: '#F0F0F0' }}
                  >
                    <span className='mr-2'>Select</span>
                    <svg
                      className='absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className='p-0'>
                    <label
                      htmlFor='apple'
                      className='flex cursor-pointer items-center gap-2 p-2'
                    >
                      <Checkbox
                        id='apple'
                        containerProps={{ className: 'p-0' }}
                        className='hover:before:content-none'
                      />
                      Apple
                    </label>
                  </MenuItem>

                  <MenuItem className='p-0'>
                    <label
                      htmlFor='dell'
                      className='flex cursor-pointer items-center gap-2 p-2'
                    >
                      <Checkbox
                        ripple={false}
                        id='dell'
                        containerProps={{ className: 'p-0' }}
                        className='hover:before:content-none'
                      />
                      Dell
                    </label>
                  </MenuItem>
                  <MenuItem className='p-0'>
                    <label
                      htmlFor='asus'
                      className='flex cursor-pointer items-center gap-2 p-2'
                    >
                      <Checkbox
                        ripple={false}
                        id='asus'
                        containerProps={{ className: 'p-0' }}
                        className='hover:before:content-none'
                      />
                      ASUS
                    </label>
                  </MenuItem>
                  <MenuItem className='p-0'>
                    <label
                      htmlFor='microsoft'
                      className='flex cursor-pointer items-center gap-2 p-2'
                    >
                      <Checkbox
                        ripple={false}
                        id='microsoft'
                        containerProps={{ className: 'p-0' }}
                        className='hover:before:content-none'
                      />
                      Microsoft
                    </label>
                  </MenuItem>
                  <MenuItem className='p-0'>
                    <label
                      htmlFor='lenovo'
                      className='flex cursor-pointer items-center gap-2 p-2'
                    >
                      <Checkbox
                        ripple={false}
                        id='lenovo'
                        containerProps={{ className: 'p-0' }}
                        className='hover:before:content-none'
                      />
                      Lenovo
                    </label>
                  </MenuItem>
                </MenuList>
              </Menu>
            </span>
          </div>
        </div>

        {/* Screen Size Section */}
        <div className='w-1/2'>
          <div className='collapse'>
            <label
              htmlFor='selectedScreenSize'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Screen Size
            </label>
            <div>
              <span className='dropdown'>
                <Menu
                  dismiss={{
                    itemPress: false,
                  }}
                >
                  <MenuHandler>
                    <Button
                      className='relative text-gray-500 px-8 py-3'
                      style={{ backgroundColor: '#F0F0F0' }}
                    >
                      <span className='mr-2'>Select</span>
                      <svg
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </Button>
                  </MenuHandler>
                </Menu>
                ━━━
              </span>
              <span className='dropdown'>
                <Menu
                  dismiss={{
                    itemPress: false,
                  }}
                >
                  <MenuHandler>
                    <Button
                      className='relative text-gray-500 px-8 py-3'
                      style={{ backgroundColor: '#F0F0F0' }}
                    >
                      <span className='mr-2'>Select</span>
                      <svg
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </Button>
                  </MenuHandler>
                </Menu>
              </span>
            </div>

            {/* <input type='checkbox' /> */}
            {/* <div className='collapse-title text-xl font-medium'>
              Advanced Search
            </div>
            <div className='collapse-content'>
              <p>hello</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className='place-content-end'>
        <a href='#'>
          Advanced Search
        </a>
      </div>
    </div>
  );
}

export default FilterSection;
