export class UserModel {
    _id: string;
    userName: string;
    email: string;
    password: string;
    tasks: [];
    authority: string;
    status: boolean;
    deleteAc: boolean;
    createdAt: string;
    updatedAt: string;
    // other
    otp: string;
    subject: string;
    message: string;
    typeOfEmail: string;
}