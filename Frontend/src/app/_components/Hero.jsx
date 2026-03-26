import React from 'react'
import Image from 'next/image'
import {useUser} from "@clerk/nextjs";
import Link from 'next/link';

function Hero() {

    const { isSignedIn} = useUser();

    return (
        <section className="bg-gray-50 flex items-center flex-col mt-64">
            <div className="mx-auto max-w-screen-xl flex flex-col gap-16 px-4 lg:flex  lg:items-center h-full">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Instant Identification,
                        <strong className="font-extrabold text-primary sm:block"> Every Time. </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Begin Classifying Your Vehicles,Enhance Your Knowledge.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {isSignedIn ? (
                            <Link
                                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="/dashboard"
                            >
                                Home Page
                            </Link>
                        ) : (
                            <Link
                                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="/sign-in"
                            >
                                Get Started
                            </Link>
                        )}
                    </div>
                </div>
                <div>

                    <Image src={'/hero.jpg'} alt='dashboard'
                           width={1000}
                           height={1000}
                           className='mt-5 rounded-xl border-2'
                    />
                </div>

            </div>
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Find faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need
                        to make your app smarter</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit
                        eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi
                        viverra elit nunc.</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div
                                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                                    </svg>
                                </div>
                                Powerful API
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed. Tellus
                                semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div
                                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                    </svg>
                                </div>
                                SSL certificates
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Sit quis amet rutrum tellus
                                ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus
                                amet.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div
                                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                                    </svg>
                                </div>
                                Simple queues
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Quisque est vel vulputate cursus.
                                Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div
                                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"></path>
                                    </svg>
                                </div>
                                Advanced security
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Arcu egestas dolor vel iaculis in
                                ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
            <div className="py-24 sm:pt-48">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans
                            for
                            teams of&nbsp;all&nbsp;sizes</p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Distinctio et
                        nulla
                        eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
                        Explicabo id ut laborum.</p>
                    <div
                        className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div
                            className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:mt-8 lg:rounded-r-none ">
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 id="tier-freelancer"
                                        className="text-lg font-semibold leading-8 text-gray-900">Freelancer</h3>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-600">The essentials to provide your best
                                    work
                                    for clients.</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">$24</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        5 products
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Up to 1,000 subscribers
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Basic analytics
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        48-hour support response time
                                    </li>

                                </ul>
                            </div>
                            <a href="#" aria-describedby="tier-freelancer"
                               className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy
                                plan</a>
                        </div>
                        <div
                            className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 lg:rounded-b-none  ">
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 id="tier-startup"
                                        className="text-lg font-semibold leading-8 text-indigo-600">Startup</h3>
                                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">Most
                                        popular</p>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-600">A plan that scales with your rapidly
                                    growing business.</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">$32</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        25 products
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Up to 10,000 subscribers
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Advanced analytics
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        24-hour support response time
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Marketing automations
                                    </li>

                                </ul>
                            </div>
                            <a href="#" aria-describedby="tier-startup"
                               className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500">Buy
                                plan</a>
                        </div>
                        <div
                            className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:mt-8  lg:rounded-l-none">
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 id="tier-enterprise"
                                        className="text-lg font-semibold leading-8 text-gray-900">Enterprise</h3>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure
                                    for
                                    your company.</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">$48</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Unlimited products
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Unlimited subscribers
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Advanced analytics
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        1-hour, dedicated support response time
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Marketing automations
                                    </li>

                                </ul>
                            </div>
                            <a href="#" aria-describedby="tier-enterprise"
                               className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy
                                plan</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="relative z-10 mt-32 px-6 lg:px-8 w-full h-full">
                <div
                    className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
                    aria-hidden="true">
                    <div
                        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
                        style={{clipPath: "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)"}}></div>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Boost your productivity.<br/>Start
                        using our app today.</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Incididunt sint fugiat pariatur
                        cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#"
                           className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                            started</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                            aria-hidden="true">→</span></a>
                    </div>
                </div>
                <div
                    // style={display:"flex"}
                    className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
                    aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
                </div>
            </div>
        </section>

    )
}

export default Hero


{/* <Image src={'/dashboard.png'} alt='dashboard'
    width={1000}
    height={700}
    className='mt-5 rounded-xl border-2'
    />
   */
}