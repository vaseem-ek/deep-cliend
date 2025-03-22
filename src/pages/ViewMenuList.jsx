import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../service/AppContextProvider";
import { BiDollar } from "react-icons/bi";
import Loading from "../component/Loading";

function ViewMenuList() {
    const { id } = useParams();
    const { Backend_Url } = useContext(AppContext);
    const [singleData, setSingleData] = useState(null);
    const [allItems, setAllItems] = useState([]);

    const getView = async () => {
        try {
            const { data } = await axios.get(`${Backend_Url}/specific-data/${id}`);

            if (data.success) {
                setSingleData(data.menu || {});
                setAllItems(data.menu?.items || []);
            } else {
                console.error("Failed to fetch menu data");
            }
        } catch (error) {
            console.error("Error fetching menu:", error.message);
        }
    };

    useEffect(() => {
        getView();
    }, [id]); // ✅ Fix: Add id as a dependency to refetch on change

    if (!singleData) {
        return <div className="text-center text-white py-10">Loading...</div>;
    }

    return singleData ? singleData.length === 0 ? (
        <div className='flex items-center justify-center min-h-screen'>
          <p className='text-xl sm:text-2xl text-red-400'>No Application Available</p>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
            {/* Header Section */}
            <div className="text-white rounded w-full">
                <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-gradient-to-r from-slate-200 to-red-500 border-red-400 rounded-xl border">
                    <div className="flex flex-col gap-3 md:gap-10 justify-evenly md:flex-row items-center">
                        <h1 className="text-xl md:text-3xl text-black font-bold">{singleData.name}</h1>
                        <p className="text-gray-600">{singleData.description}</p>
                    </div>
                </div>
            </div>

            {/* Menu Items List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allItems.length > 0 ? (
                    allItems.map((item, index) => (
                        <div
                            key={index}
                            className="border border-white flex flex-col rounded-lg shadow-md bg-gray-800 text-white overflow-hidden p-5 w-full h-[200px]"
                        >
                            <h1 className="text-orange-500 font-bold text-2xl">{item.name}</h1>
                            <p className="text-gray-300 text-xs mt-2 line-clamp-5 ">{item.description}</p>
                            <p className="text-gray-300 mt-2 font-semibold flex items-center gap-1">
                                <BiDollar size={16} />
                                {item.price}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center col-span-3">No items found for this menu.</p>
                )}
            </div>
        </div>
   ) : (
    <Loading />
  )
}

export default ViewMenuList;
