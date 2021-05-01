export default class ValidationError extends Error {
    constructor(error: string, message: string) {
        super();
        this.name = `erro de validação ${error}`;
        this.message = message;
    }
}
/**
 *
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

 *
 */
