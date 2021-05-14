type ILerNotificacaoRequest = {
    notificacao_id: number;
};

export namespace ILerNotificacao {
    export type Request = ILerNotificacaoRequest;
    export type Result = Promise<void>;
    export type lerNotificacao = (data: Request) => Result;
}
