import React from 'react';
import {ILerNotificacao, INotificacao} from '../../../domain/notificacao';
import {NotificationContextData} from './INotificacoes';
import FirebaseFirestore from '@react-native-firebase/firestore';
import {useAuth} from '../auth';

const NotificationContext = React.createContext<NotificationContextData>(
    {} as NotificationContextData,
);

const NotificacaoProvider: React.FC = ({children}) => {
    const [_notificacoes, _setNotificacoes] = React.useState<INotificacao[]>(
        [],
    );
    const {user} = useAuth();

    const [_loading, _setLoading] = React.useState(false);

    const lerNotificacao: ILerNotificacao.lerNotificacao = React.useCallback(
        async (data: ILerNotificacao.Request): ILerNotificacao.Result => {
            const {notificacao_id} = data;

            _setNotificacoes((oldNotify) =>
                oldNotify.filter((_notify) => _notify.id !== notificacao_id),
            );
        },
        [],
    );

    const _updateNotify = React.useCallback((e: INotificacao[] | undefined) => {
        _setLoading(true);

        _setNotificacoes((_oldNotify) => {
            if (_oldNotify && _oldNotify.length > 0) {
                if (!e || e.length <= 0) {
                    return _oldNotify;
                }

                const diff = e.filter((notify) =>
                    _oldNotify.find((_notify) => _notify.id !== notify.id),
                );

                return [..._oldNotify, ...diff];
            }

            if (!e || e.length <= 0) {
                return [];
            }

            return e;
        });
    }, []);

    React.useEffect(() => {
        const allNotify_ref = FirebaseFirestore()
            .collection<INotificacao[]>('notificacoes')
            .doc('all')
            .onSnapshot((_doc) => {
                _updateNotify(_doc.data());
            });

        const providerNotify_ref = FirebaseFirestore()
            .collection<INotificacao[]>('notificacoes')
            .doc(user.user_id)
            .onSnapshot((_doc) => {
                _updateNotify(_doc.data());
            });

        return () => {
            allNotify_ref();
            providerNotify_ref();
        };
    }, [_updateNotify, user.user_id]);

    return (
        <NotificationContext.Provider
            value={{
                loading: _loading,
                marcarNotificacaoComoLida: lerNotificacao,
                noticacoes: _notificacoes,
            }}>
            {children}
        </NotificationContext.Provider>
    );
};

const useNotificacao = (): NotificationContextData => {
    const context = React.useContext(NotificationContext);

    if (!context) {
        throw new Error('Provider de notificação não implementado !!');
    }

    return context;
};

export {NotificacaoProvider, useNotificacao};
