import {IUser} from './IUser';
import {IUserRepository} from './IUserRepository';
export * from './uses-cases';

namespace IUser {
    export type User_intf = IUser;
    export type UserRepository_intf = IUserRepository;
}

export default IUser;
