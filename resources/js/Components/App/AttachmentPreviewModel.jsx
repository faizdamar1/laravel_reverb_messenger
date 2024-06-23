import { isPreviewable } from '@/Pages/helpers';
import { Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react'

const AttachmentPreviewModel = ({
    attachments,
    index,
    show = false,
    onClose = () => { },
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const attachment = useMemo(() => {
        return attachments[currentIndex];
    }, [attachments, currentIndex])

    const previewableAttachments = useMemo(() => {
        return attachments.filter((attachment) => isPreviewable(attachment));
    }, [attachments])

    const close = () => {
        onClose();
    }

    const prev = () => {
        if (currentIndex === 0) { return; }
        setCurrentIndex(currentIndex - 1);
    }

    const next = () => {
        if (currentIndex === previewableAttachments.length - 1) { return; }
        setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        setCurrentIndex(index);
    }, [index])


    return (
        <Transition
            show={show}
            as={Fragment}
            leave='duration-200'
        >

        </Transition>
    )
}

export default AttachmentPreviewModel