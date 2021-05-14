import {ILerNotificacao, INotificacao} from '../../../domain/notificacao';

export interface NotificationContextData {
    loading: boolean;
    noticacoes: INotificacao[];
    marcarNotificacaoComoLida: ILerNotificacao.lerNotificacao;
}
