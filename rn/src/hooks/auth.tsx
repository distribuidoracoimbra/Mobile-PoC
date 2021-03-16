import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface User {
    // id: string;
    // name: string;
    email: string;
    password: string;
    // avatar_url: string;
}

interface AuthState {
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    loading: boolean;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: User): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData(): Promise<void> {
            const user = await AsyncStorage.getItem('@forca-de-venda:user');

            if (user) {
                setData({user: JSON.parse(user)});
            }
            setLoading(false);
        }

        loadStoragedData();
    }, []);
    const signIn = useCallback(async ({email, password}) => {
        // const response = await api.post('sessions', {
        //     email,
        //     password,
        // });

        // const {token, user} = response.data;
        const user = {
            email,
            password,
        };

        await AsyncStorage.multiSet([
            // ['@forca-de-venda:token', token],
            ['@forca-de-venda:user', JSON.stringify(user)],
        ]);

        // api.defaults.headers.authorization = `Bearer ${token}`;

        setData({user});
    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.removeItem('@forca-de-venda:user');

        setData({} as AuthState);
    }, []);

    const updateUser = useCallback(
        async (user: User) => {
            await AsyncStorage.setItem(
                '@forca-de-venda:user',
                JSON.stringify(user),
            );

            setData({
                user,
            });
        },
        [setData],
    );

    return (
        <AuthContext.Provider
            value={{user: data.user, signIn, signOut, updateUser, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return context;
}

export {AuthProvider, useAuth};
