const LOGGER_URL = import.meta.env.VITE_LOGGER_URL;

export async function sendLog(path, status = 200) {

    try {

        await fetch(`${LOGGER_URL}/log`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                site: window.location.hostname,
                ip: "unknown",
                path,
                method: "GET",
                status,
                user_agent: navigator.userAgent
            })
        });

    } catch (err) {

        console.error(err);

    }

}
