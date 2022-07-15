import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';
import { protection } from '@/utils/jsHelper';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">{props.title}</h2>}
        >
            <Head title={props.title} />
            {protection()}
            <div className="py-12 flex justify-center items-center">
                <div className='indicator bg-base-300'>
                    <span className={`indicator-item indicator-top indicator-center badge badge-inline`}>Feature #1</span>
                    <div className="max-w-2xl mx-auto sm:px-4 lg:px-6 rounded-lg border-b border-neutral shadow-lg">
                        <div className="flex flex-wrap justify-center items-stretch p-12 gap-2">
                            <Link href={route('form.news')} method="get" as="button" className='w-full lg:w-32 btn btn-outline'>Buat Postingan</Link>
                            <Link href={route('my.news')} method="get" as="button" className='w-full lg:w-32 btn btn-outline'>Postingan Saya</Link>
                            <button className='w-full lg:w-1/2 btn btn-outline'>Badge Saya <span className="ml-2 badge badge-sm badge-primary">Soon</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}