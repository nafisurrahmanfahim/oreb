import React from 'react'

const Pagination = ({ pageNumber, Paginate, next, prev, currentPage }) => {


    return (
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-sm">
                {pageNumber.length > 0 &&
                    <li>
                        <a onClick={prev} class="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-gray-300 rounded-s-lg hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 e bg-[#1a1818] text-[#fff] border-e-0">Previous</a>
                    </li>
                }
                {pageNumber.map((item, i) => (
                    <li>
                        <a onClick={() => Paginate(item)} class={`${currentPage == i + 1 ? "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-[#000] dark:hover:bg-gray-700 dark:hover:text-white" : "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-[#fff] bg-[#1a1818] border"}`}>{item + 1}</a>
                    </li>
                ))}
                {pageNumber.length > 0 &&
                    <li>
                        <a onClick={next} class="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-e-lg  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 e bg-[#1a1818] text-[#fff]">Next</a>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Pagination