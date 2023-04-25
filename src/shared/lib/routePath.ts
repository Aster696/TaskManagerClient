export class routePath {
    slase: string = '/';
// basic route
    home: string = 'home';
    about: string = 'about';
    contact: string = 'contact';
    forgotPassword: string = 'forgot-password';
    forgotPasswordOtp: string = 'forgot-password-otp/';
    resetPassword: string = 'reset-password/';
// user route
    login: string = 'login';
    signup: string = 'signup';
    profile: string = 'profile';
// task route
    addTask: string = 'add-task';
    displayTasks: string = 'display-tasks';
// server route
    server_url: string = 'http://localhost:5700';
    // server_url: string = 'https://32a5-103-171-211-202.in.ngrok.io';
    // server_url: string = 'https://plain-gold-pronghorn.cyclic.app';
    // server_url: string = 'https://a7-task-manager-server.herokuapp.com';
    // user route
        registerServer = '/user/register';
        loginServer = '/user/login';
        updateUserServer = '/user/update-user';//payload
        deleteUserServer = '/user/delete-user';//payload
        displayUserServer = '/user/display-user'//payload
        subscribeToNotification = '/user/subscribe-to-notification';//payload
        displayNotificationsServer = '/user/display-notifications';//payload
        removeNotificationServer = '/user/remove-notification/';//task id
        forgotPasswordServer = '/user/forgot-password';
    // task route
        addTaskServer = '/task/add-task';
        updateTaskServer = '/task/update-task/';//:id
        deleterTaskServer = '/task/delete-task/';//:id
        displayTasksServer = '/task/display-tasks/';
        displayTaskServer = '/task/display-task/';//:id
    // email route
        getFeedbackServer = '/email/get-feedback';
        sendHotmailServer = '/email/send-hotmail';
        sendResetPasswordOtpEmailServer = '/email/send-reset-password-otp-email';
        sendPasswordUpdatedSuccessEmailServer= '/email/send-password-updated-success-email/';//:id

}