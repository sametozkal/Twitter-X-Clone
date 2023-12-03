import React from "react";

export default function UserBox() {
 return (
    <div className="flex items-center mb-6 hover:bg-primary-light cursor-pointer py-2 px-4">
        <img 
        src="https://media.licdn.com/dms/image/D4D03AQGxnmWM_noWsQ/profile-displayphoto-shrink_800_800/0/1691833512671?e=1706745600&v=beta&t=9CpQZRs0nrZsEM9HGyyIArZnj8W52szuU-QR91EVhzk" 
        alt="" 
        className="w-11 h-11 rounded-full"
        />
        <div className="flex flex-col">
            <span className="font-bold text-black">Samet Özkal</span>
            <span>@sametozkal</span>
        </div>
    </div>
 )
}