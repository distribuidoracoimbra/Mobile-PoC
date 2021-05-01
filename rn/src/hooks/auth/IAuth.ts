import UserNamespace, {ILogin, ILogOut, ISignIn} from '../../../domain/user';

export type IUser = UserNamespace.User_intf;

export interface AuthContextData {
    user: IUser;
    loading: boolean;
    entrar: ILogin.login;
    sair: ILogOut.logOut;
    registrar: ISignIn.signIn;
}
