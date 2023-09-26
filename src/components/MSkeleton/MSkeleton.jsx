import React from 'react'

const MSkeleton = () => {
    return (
        <div className="border border-neutral-800 shadow max-w-[260px] pb-3 rounded-md">
            <div className="animate-pulse">
                <div className="w-full bg-neutral-800 h-[300px] rounded-md"></div>
                <div className="w-full mt-2 pl-2">
                    <div className="max-w-[180px] h-[10px] bg-neutral-800 rounded-sm"></div>
                    <div className="max-w-[150px] mb-1 mt-1 h-[10px] bg-neutral-800 rounded-sm"></div>
                    <div className="max-w-[100px] h-[10px] bg-neutral-800 rounded-sm"></div>
                </div>
            </div>
        </div>
    )
}

export default MSkeleton