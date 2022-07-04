const { admin } = require('../../config/firebase/firebase.config');
const { notificationOptions } = require('../../constants/notification-options.contant');

const sendNotification = async (data) => {
    try {
        const { registrationToken, message } = data;
        const notification = await admin.messaging().sendToDevice(registrationToken, message, notificationOptions);
        return notification;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendNotification
}