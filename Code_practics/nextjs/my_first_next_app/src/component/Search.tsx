import React, {FC} from "react";


interface SearchType {
    searchTerm: string,
    onSearchChange: (query: string) => void
    onAddTodoButtonClick: () => void

}

const Search: FC<SearchType> = ({searchTerm, onSearchChange, onAddTodoButtonClick}) => {

    return (
        <>
            <div className={' pt-10 flex justify-center'}>
                <div
                    className={`mt-1 flex rounded-xl shadow-sm w-full sm:w-2/3  px-2 sm:text-xl   dark:bg-[#232d35]  dark:text-[#9eb8cf] bg-[#8ab6d6]   }`}>
                    <input value={searchTerm}
                           onChange={(e) => onSearchChange(e.target.value)} type="text" id="inputField"
                           name="inputField" placeholder={'Search here ...'}
                           className={`  block w-full px-2  py-3 my-3 mx-1 border-gray-300 rounded-xl    dark:bg-[#121c22]   dark:text-[#9eb8cf] bg-white text-black }`}/>
                    <button type="button"
                            className={`py-3 my-3 mx-1 px-3  rounded-xl bg-blue-500 hover:bg-[#4c759f] dark:text-black dark:border dark:bg-[#4c757e] }`}
                            onClick={onAddTodoButtonClick}> Add&nbsp;Todo
                    </button>

                </div>
            </div>


        </>
    )
}
export default Search