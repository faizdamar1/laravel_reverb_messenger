import { isPreviewable } from '@/Pages/helpers';
import React, { useState } from 'react'

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

    return (
        <div>

        </div>
    )
}

export default AttachmentPreviewModel