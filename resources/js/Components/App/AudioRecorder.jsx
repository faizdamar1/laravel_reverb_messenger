import { MicrophoneIcon, StopCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const AudioRecorder = () => {
    const [recording, setRecording] = useState(false);
    return (
        <button>
            {recording && <StopCircleIcon className='w-6 text-red-600' />}
            {!recording && <MicrophoneIcon className='w-6' />}
        </button>
    )
}

export default AudioRecorder