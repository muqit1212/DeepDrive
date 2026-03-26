'use client';
import React, {useEffect} from 'react'

import axios from "axios";
import {CrossIcon, Image, X} from 'lucide-react';


function Dashboard() {
    const [file, setFile] = React.useState(null);
    const [responseState, setResponseState] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [apiError, setApiError] = React.useState(null);


    const postFile = React.useCallback(() => {
        const form = new FormData()
        form.append('image', file.target.files[0])
        console.log(file.target.files)
        setLoading(true)
        axios.post('http://localhost:8000/predict', form)
            .then((response) => {
                let model = Object.values(response.data.result?.metadatas[0][0])[0].split("-")[1]
                let company = Object.values(response.data.result?.metadatas[0][0])[0].split("-")[0]
                responseState['model'] = model
                responseState['company'] = company
                setResponseState(responseState)
            })
            .catch((error) => {
                setApiError(error);
            }).finally(() => setLoading(false))

    }, [file?.target?.files, responseState])

    useEffect(() => {
        if (file) {
            postFile()
        }
    }, [file, postFile])

    return (
        <div className='p-10'>
            <h2 className='font-bold text-3xl '>Prediction</h2>
            <div className="flex flex-col gap-4">
                <div className="col-span-full mt-8">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Cover photo
                    </label>
                    <div
                        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        {file ? (
                            <ImagePreview file={file} setFile={setFile}/>
                        ) : (
                            <div className="text-center">
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                               onChange={(e) => setFile(e)}/>
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        )}
                    </div>
                </div>
                <Description loading={loading} company={responseState?.company} model={responseState?.model}/>
            </div>
        </div>
    )
}

export default Dashboard


export function Description({company, model, loading}) {
    return (
        <div className="overflow-hidden bg-white sm:rounded-lg border border-gray-200 mt-8">
            <div className="px-4 py-6 sm:px-6">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Vehicle Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Predicted information about vehicle</p>
            </div>
            <div className="border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Company</dt>
                        <dd className={`mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ${loading ? "animate-pulse" : ""}`}>{loading ?
                            <div className="h-6 bg-gray-400 rounded-md"></div> : company}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Model</dt>
                        <dd className={`mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ${loading ? "animate-pulse" : ""}`}>{loading ?
                            <div className="h-6 bg-gray-400 rounded-md"></div> : model}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

function ImagePreview({file, setFile}) {
    file = file?.target?.files[0]
    if (!file) {
        return null
    }

    return (
        <div className="mt-4 size-48 relative">
            <button className="bg-indigo-700 rounded-full absolute -top-3 -right-3 p-2" onClick={()=> setFile(null)}>
                <X className=" size-4 text-white "/>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={URL.createObjectURL(file)} alt="" className="rounded-md h-full w-full"/>
        </div>
    )
}