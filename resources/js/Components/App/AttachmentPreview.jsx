import { formatBytes, isPdf, isPreviewable } from '@/Pages/helpers';
import { PaperClipIcon } from '@heroicons/react/24/solid';
import React from 'react'

const AttachmentPreview = ({ file }) => {
    return (
        <div className='w-full flex items-center gap-2 py-2 px-3 rounded-md bg-slte-800'>
            <div>
                {isPdf(file.file) && <img src='/img/pdf.png' className='w-8' />}
                {!isPreviewable(file.file) && (
                    <div className='flex justify-center items-start w-10 h-10 bg-gray-700 rounded'>
                        <PaperClipIcon />
                    </div>
                )}
            </div>
            <div className='flex-1 text-gray-400 text-nowrap text-ellipsis overflow-hidden'>
                <h3>{file.file.name}</h3>
                <p className="text-xs">
                    {formatBytes(file.file.size)}
                </p>
            </div>
        </div>
    );
}

export default AttachmentPreview;