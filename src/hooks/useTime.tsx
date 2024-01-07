import { useEffect, useState } from 'react'

interface TimeHookResult {
    formattedTime: string;
}

function useTime(): TimeHookResult {

    const [currentTime, setCurrentTime] = useState(new Date())


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

    return { formattedTime }
}

export default useTime