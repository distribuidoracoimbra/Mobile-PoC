import UserNamespace, {ILogin, ILogOut, ISignIn} from '../../../domain/user';

export type IUser = UserNamespace.User_intf;

export type IUserProfileApp = Omit<IUser, 'user_password'> & {
    user_nome: string;
    user_password: string;
};

export type ILoginRequest = ISignIn.signIn & IUserProfileApp;

export interface AuthContextData {
    user: IUser;
    isLogged: boolean;
    loading: boolean;
    entrar: ILogin.login;
    sair: ILogOut.logOut;
    registrar: (data: Omit<ILoginRequest, 'user_id'>) => Promise<void>;
}
