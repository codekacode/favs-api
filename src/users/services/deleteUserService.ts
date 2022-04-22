import { UserModel } from './../entity/models/userModel';


export const deleteUserService = async (id: string): Promise<void> => {
    try {
        await UserModel.deleteOne({ id });
    } catch (error: any) {
        throw new Error(`${error.message} Error deleting user`);
    }
}