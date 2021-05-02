type ISignInRequest = {
    email: string;
    password: string;
};

export namespace ISignIn {
    export type Request = ISignInRequest;
    export type Result = Promise<void>;
    export type signIn = (data: Request) => Result;
}
