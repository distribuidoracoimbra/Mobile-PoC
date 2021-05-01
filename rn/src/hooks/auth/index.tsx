import React from 'react';
import {AuthContextData, IUser} from './IAuth';
import FirebaseAuth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ILogin, ILogOut} from '../../../domain/user';

// import { Container } from './styles';

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const [userData, setUserData] = React.useState<IUser>({} as IUser);
    const [loading, setLoading] = React.useState(false);
    const AuthFirebaseProvider = FirebaseAuth();

    const entrar: ILogin.login = React.useCallback(
        async (data: ILogin.Request): Promise<ILogin.Result> => {
            setLoading(true);
            const {user_email, user_password} = data;
            const auth = await AuthFirebaseProvider.signInWithEmailAndPassword(
                user_email,
                user_password,
            );

            setUserData({
                user_id: auth.additionalUserInfo!.providerId,
                user_email,
                user_password,
            });
            setLoading(false);
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
            } else {
                setUserData((oldData) => ({
                    ...oldData,
                    user_email: data.email as string,
                    user_id: data.providerId,
                }));
            }

            setLoading(false);
        },
        [],
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