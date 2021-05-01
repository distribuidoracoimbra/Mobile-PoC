type ISignInRequest = {
    email: string;
    password: string;
};

export namespace ISignIn {
    export type Request = ISignInRequest;
    export type Result = boolean;
    export type signIn = (data: Request) => Promise<Result>;
}
