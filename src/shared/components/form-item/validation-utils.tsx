export const VALIDATION_TYPES = {
    IS_REQUIRED: 'IS_REQUIRED',
    PATTERN: 'PATTERN',
}

export const VALIDATION_MESSAGES = {
    [VALIDATION_TYPES.IS_REQUIRED]: '${field} is required',
    [VALIDATION_TYPES.PATTERN]: 'Please enter valid ${field}'
}
