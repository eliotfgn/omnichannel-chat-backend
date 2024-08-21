class HttpException extends Error {
  status: number;
  message: string;
  errorType: ErrorType;

  constructor(status: number, message: string, errorType: ErrorType) {
    super(message);

    this.status = status;
    this.message = message;
    this.errorType = errorType;
  }
}

type ErrorType =
  | 'authentication'
  | 'authorization'
  | 'validation'
  | 'not_found'
  | 'conflict';

export default HttpException;
