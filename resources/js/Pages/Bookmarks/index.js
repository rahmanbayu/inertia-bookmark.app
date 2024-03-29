import Authenticated from '@/Layouts/Authenticated';
import React from 'react';

export default function index(props) {
    console.log(props.bookmarks);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ul>
                                {
                                    props?.bookmarks?.map((i, index) => {
                                        return <li className="py-3 px-3 border-b border-gray-200" key={index}>{ i.title }</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
