import React from 'react';

import PageTitle from '../components/PageTitle';

const CategoryViewDemo: React.FC = () => (
  <>
    <PageTitle
      title="Canned Dog Food"
      subtitle={
        <>
          Created by <span className="font-medium text-gray-900 ">Tom Malesic</span> on February 18,
          2021
        </>
      }
    />
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8 xl:col-span-9">
        <div className="bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Category Information</h3>
            <span className="text-sm text-gray-600">Details and files.</span>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Store</h3>
                <span className="text-sm text-gray-900">13 - Newberry Commons</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Aisle</h3>
                <span className="text-sm text-gray-900">15B</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Total Unique Items</h3>
                <span className="text-sm text-gray-900">57 Items</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Total Facings</h3>
                <span className="text-sm text-gray-900">183 Facings</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Shelves</h3>
                <span className="text-sm text-gray-900">6 Shelves</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Shelf Dimensions</h3>
                <span className="text-sm text-gray-900">2&apos; x 4&apos;</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Length (ft)</h3>
                <span className="text-sm text-gray-900">28 ft</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Shelf Spacing (in)</h3>
                <span className="text-sm text-gray-900">8, 8, 8, 8, 10, 12</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Average Profit</h3>
                <span className="text-sm text-gray-900">20.6%</span>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Class Descriptions</h3>
                <ul>
                  <li className="text-sm text-gray-900">Dog Food</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm text-gray-600">Subclass Descriptions</h3>
                <ul>
                  <li className="text-sm text-gray-900">Canned Dog Food</li>
                  <li className="text-sm text-gray-900">Dry Dog Food</li>
                  <li className="text-sm text-gray-900">Wet Dog Food</li>
                </ul>
              </div>
              <div className="col-span-2">
                <h3 className="text-sm text-gray-600">Notes</h3>
                <span className="text-sm text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis
                  convallis tellus id. Arcu bibendum at varius vel pharetra vel. Orci eu lobortis
                  elementum nibh tellus molestie nunc non. Gravida dictum fusce ut placerat orci
                  nulla pellentesque dignissim. Sit amet consectetur adipiscing elit ut aliquam.
                  Scelerisque viverra mauris in aliquam sem fringilla ut. Pulvinar mattis nunc sed
                  blandit libero volutpat sed cras. Nec ultrices dui sapien eget mi. Enim praesent
                  elementum facilisis leo vel fringilla est.
                </span>
              </div>
              <div className="col-span-2">
                <h3 className="text-sm text-gray-600">Export as file</h3>
                <div className="mt-1 border border-gray-200 divide-y rounded-md">
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-600">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm text-gray-900">category.csv</h4>
                    </div>
                    <button
                      className="px-2 py-1 text-sm text-karns-blue focus:outline-none"
                      type="button"
                    >
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-600">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm text-gray-900">category_items.csv</h4>
                    </div>
                    <button
                      className="px-2 py-1 text-sm text-karns-blue focus:outline-none"
                      type="button"
                    >
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-600">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm text-gray-900">missing_items.csv</h4>
                    </div>
                    <button
                      className="px-2 py-1 text-sm text-karns-blue focus:outline-none"
                      type="button"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 xl:col-span-3">
        <div className="bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="px-6 py-4 space-y-4">
            <h3 className="font-semibold text-gray-900">Timeline</h3>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 text-white bg-gray-400 rounded-full">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Created by{' '}
                    <span className="text-sm font-medium text-gray-900">Tom Malesic</span>
                  </span>
                </div>
                <span className="text-sm text-gray-600">Feb 18</span>
              </div>

              <div className="w-0.5 h-4 ml-4 bg-gray-200" />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Modified by <span className="text-sm font-medium text-gray-900">Lee Huala</span>
                  </span>
                </div>
                <span className="text-sm text-gray-600">Feb 21</span>
              </div>

              <div className="w-0.5 h-4 ml-4 bg-gray-200" />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-full">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    25 items added by{' '}
                    <span className="text-sm font-medium text-gray-900">Tom Malesic</span>
                  </span>
                </div>
                <span className="text-sm text-gray-600">Feb 21</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-span-8 xl:col-span-9">
    <div className="bg-white border border-gray-200 rounded-md shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-gray-900">Comments</h3>
      </div>
      <div className="p-6"></div>
    </div>
  </div> */}
    </div>
  </>
);

export default CategoryViewDemo;
