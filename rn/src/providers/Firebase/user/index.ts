import IUserNamespace, {IRequestUpdateUsuario} from '../../../../domain/user';
import FirebaseAuth from '@react-native-firebase/auth';

export class UserProviderFirebaseAdapter
    implements IUserNamespace.UserRepository_intf {
    private auth;

    constructor() {
        this.auth = FirebaseAuth();
    }

    async cadastrarUsuario(
        user: Omit<IUserNamespace.User_intf, 'user_id'>,
    ): Promise<Omit<IUserNamespace.User_intf, 'user_password'>> {
        const {user_email, user_password} = user;

        const emailAlrealyInUse = await this.buscarProdutoPorEmail(user_email);

        if (emailAlrealyInUse) {
            throw new Error('Email já em uso !');
        }

        try {
            const credentials = await this.auth.createUserWithEmailAndPassword(
                user_email,
                user_password,
            );

            return {
                user_email: credentials.user.email as string,
                user_id: credentials.user.providerId,
            };
        } catch (error) {
            throw new Error(
                'Ocorreu um erro ao tentar registrar o usuário - ' +
                    error.message(),
            );
        }
    }

    async buscarProdutoPorEmail(
        _userEmail: string,
    ): Promise<Omit<IUserNamespace.User_intf, 'user_password'> | undefined> {
        return undefined;
    }

    async atualizarUsuario(
        usuario: IRequestUpdateUsuario,
    ): Promise<Omit<IUserNamespace.User_intf, 'user_password'>> {
        const {email, password} = usuario;

        const Promss = [];

        if (email) {
            Promss.push(this.auth.currentUser!.updateEmail(email));
        }
        if (password) {
            Promss.push(this.auth.currentUser!.updatePassword(password));
        }

        await Promise.all(Promss);

        return {
            user_email: this.auth.currentUser!.email as string,
            user_id: this.auth.currentUser!.providerId,
        };
    }
}
