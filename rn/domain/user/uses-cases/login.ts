interface ILoginRequest {
    user_email: string;
    user_password: string;
}

export namespace ILogin {
    export type Request = ILoginRequest;
    export type Result = void;
    export type login = (data: ILoginRequest) => Promise<Result>;
}
