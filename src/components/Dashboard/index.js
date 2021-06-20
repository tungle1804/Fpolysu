import React from 'react'
import "./toggle.css"

export default function Dashboard() {

    return (
        <>

            <div>
                <div className="flex items-center justify-center w-full mb-24">

                    <label htmlFor="toogleA" className="flex items-center cursor-pointer">

                        <div className="relative">

                            <input id="toogleA" type="checkbox" className="hidden" />

                            <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />

                            <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" />
                        </div>

                        <div className="ml-3 text-gray-700 font-medium">
                            Toggle Me!!!!
      </div>
                    </label>
                </div>
                <div className="bg-gray-400 text-gray-600 px-4 py-3 rounded relative text-sm text-center">
                    Admittedly, there is a litte bit of additional CSS, but not much 😅
    <br /><a href="https://twitter.com/_lhermann" className="text-blue-600 hover:underline">Follow me on Twitter</a>
                </div>
            </div>

        </>
    )
}
