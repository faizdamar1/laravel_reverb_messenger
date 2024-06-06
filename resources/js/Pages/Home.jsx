import ChatLayout from '@/Layouts/ChatLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect, useState } from 'react';

function Home({ messages }) {
    const [localMessages, setLocalMessages] = useState([]);

    useEffect(() => {
        setLocalMessages(messages);
    }, [messages]);

    return (
        <>
            {!messages && (
                <div className='flex flex-col gap-8 justify-center items-center text-center h-full opacity-35'>
                    <div className='text-2xl md:text-4xl p-16 text-slate-200'>
                        Please slect conversation to see messages
                    </div>
                </div>
            )}
        </>
    );
}

Home.layout = (page) => {
    return (
        <AuthenticatedLayout user={page.props.auth.user}>
            <ChatLayout children={page} />
        </AuthenticatedLayout >
    );
}

export default Home;