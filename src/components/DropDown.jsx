import { useState } from "react";

export default function DropDown({
    onCategoryChange,
    sortOrder,
    setSortOrder
}) {

    const [open, setOpen] = useState(false);
    function handleClick(option) {

        onCategoryChange(option);

        setOpen(false);
    }
    function toggleSort() {

        if (sortOrder === "desc") {
            setSortOrder("asc");
        } else {
            setSortOrder("desc");
        }
    }
    return (

        <div className="flex items-center gap-4">

            <button
                onClick={toggleSort}
                className="border px-4 py-2 rounded"
            >
                {sortOrder === "desc" ? "↓" : "↑"}
            </button>

            <div className="relative inline-block">

                <button
                    onClick={() => setOpen(!open)}
                    className="border px-4 py-2 rounded"
                >
                    Categories
                </button>

                {open && (

                    <div className="absolute right-0 bg-white border rounded mt-2 w-48 shadow z-50">

                        <button
                            onClick={() => handleClick("popular")}
                            className="block w-full text-left p-3 hover:bg-gray-200"
                        >
                            Popular
                        </button>

                        <button
                            onClick={() => handleClick("top_rated")}
                            className="block w-full text-left p-3 hover:bg-gray-200"
                        >
                            Top Rated
                        </button>

                        <button
                            onClick={() => handleClick("upcoming")}
                            className="block w-full text-left p-3 hover:bg-gray-200"
                        >
                            Upcoming
                        </button>

                        <button
                            onClick={() => handleClick("now_playing")}
                            className="block w-full text-left p-3 hover:bg-gray-200"
                        >
                            Now Playing
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}