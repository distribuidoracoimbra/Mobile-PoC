export default class ValidationError extends Error {
    constructor(error: string, message: string) {
        super();
        this.name = `erro de validação ${error}`;
        this.message = message;
    }
}
