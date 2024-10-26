import { createContext, useState } from 'react'

const NotificationContext = createContext({
    notification: null, // { title, message, status }
    showNotification: function (notificationData) { },
    hideNotification: function () { }
});

export function NotificationContextProvider(props) {
    const [activeNotification, setAcitveNotification] = useState();

    function showNotificationHandler(notificationData) {
        setAcitveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setAcitveNotification(null);
    }

    const context = { notification: activeNotification, showNotification: showNotificationHandler, hideNotification: hideNotificationHandler }
    return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>
}

export default NotificationContext;
