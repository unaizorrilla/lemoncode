import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    gender: [Validators.required],
    status: [Validators.required],
    type: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
