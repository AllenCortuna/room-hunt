import React from 'react'

const List = ({list}) => {
  return (
        <div
          className="w-screen p-4 mt-3 rounded-md bg-white h-min grid grid-row-4 shadow border border-gray-200"
          id={list._id}
        >
          <div>
            <h4 className="font-medium text-sm text-gray-600  ">
              {list.name}
            </h4>

            <p className="text-xs text-gray-500">Php {list.price}</p>
            <p className="truncate text-gray-400 text-xs">{list.detail}</p>
          </div>
        </div>
  )
}

export default List
