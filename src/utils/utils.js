export async function validate(data, schema) {
  let validData = null;
  let errors = null;
  try {
    validData = await schema.validate(data, {
      abortEarly: false,
    });
  } catch (vErrors) {
    const validationErrors = {};

    vErrors.inner.forEach((error) => {
      validationErrors[error.path] = error.message;
    });

    errors = validationErrors;
  }
  return {data: validData, errors};
}
