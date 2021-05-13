import { ValidationError } from 'yup';

interface IValidatedErrors {
  [key: string]: string;
}
export default function getValidationErrors(
  err: ValidationError
): IValidatedErrors {
  const validationError: IValidatedErrors = {};

  err.inner.forEach((error) => {
    if (error.path) {
      validationError[error.path] = error.message;
    }
  });

  return validationError;
}
