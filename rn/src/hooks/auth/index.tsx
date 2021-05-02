import React from 'react';
import {AuthContextData, IUser, IUserProfileApp, ILoginRequest} from './IAuth';
import FirebaseAuth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import FirebaseStorage from '@react-native-firebase/firestore';
import {ILogin, ILogOut, ISignIn} from '../../../domain/user';

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const [userData, setUserData] = React.useState<IUser>({} as IUser);
    const [loading, setLoading] = React.useState(false);
    const [_logado, _setLogado] = React.useState(false);
    const AuthFirebaseProvider = FirebaseAuth();
    const FirebaseStorageProvider = FirebaseStorage();

    const entrar: ILogin.login = React.useCallback(
        async (data: ILogin.Request): Promise<ILogin.Result> => {
            const {user_email, user_password} = data;
            setLoading(true);

            try {
                const auth = await AuthFirebaseProvider.signInWithEmailAndPassword(
                    user_email,
                    user_password,
                );

                setUserData({
                    user_id: auth.additionalUserInfo!.providerId,
                    user_email,
                    user_password,
                });
            } finally {
                setLoading(false);
            }
        },
        [AuthFirebaseProvider],
    );

    const sair: ILogOut.logOut = React.useCallback(async (): Promise<ILogOut.Result> => {
        setLoading(true);
        await AuthFirebaseProvider.signOut();
        setUserData({} as IUser);
        setLoading(false);
    }, [AuthFirebaseProvider]);

    const handleChangeUserData = React.useCallback(
        (data: FirebaseAuthTypes.User | null) => {
            setLoading(true);
            if (!data) {
                setUserData({} as IUser);
                _setLogado(false);
            } else {
                setUserData((oldData) => ({
                    ...oldData,
                    user_email: data.email as string,
                    user_id: data.uid,
                }));
                _setLogado(true);
            }

            setLoading(false);
        },
        [],
    );

    const registrar = React.useCallback(
        async (user: Omit<ILoginRequest, 'user_id'>): ISignIn.Result => {
            const {user_email, user_nome, user_password} = user;
            setLoading(true);

            try {
                return AuthFirebaseProvider.createUserWithEmailAndPassword(
                    user_email,
                    user_password,
                ).then((userCredentials) => {
                    FirebaseStorageProvider.collection<
                        Omit<IUserProfileApp, 'user_password'>
                    >('users')
                        .doc(userCredentials.user.uid)
                        .collection('perfil')
                        .add({
                            user_email: user_email,
                            user_nome: user_nome,
                            user_id: userCredentials.user.uid,
                        });

                    setUserData({
                        user_email: user_email,
                        user_id: userCredentials.user.uid,
                        user_password: user_password,
                    });
                });
            } finally {
                setLoading(false);
            }
        },
        [AuthFirebaseProvider, FirebaseStorageProvider],
    );

    React.useEffect(() => {
        const subscriber = AuthFirebaseProvider.onAuthStateChanged(
            handleChangeUserData,
        );

        return subscriber;
    }, [AuthFirebaseProvider, handleChangeUserData]);

    return (
        <AuthContext.Provider
            value={{
                entrar,
                loading,
                sair,
                user: userData,
                registrar,
                isLogged: _logado,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextData => {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error('error');
    }

    return context;
};

export {AuthProvider, useAuth};
