import assert from 'assert';

export function getEnv(key, defaultValue) {
    /**
     * Retrieves the value of an environment variable.
     * 
     * Arguments:
     * @param {string} key - The name of the environment variable to retrieve.
     * * @param {string} [defaultValue] - The default value to return if the environment variable is not set.
     * Returns:
     * @returns {string} - The value of the environment variable or the default value if not set.
     * 
     */
    const value = process.env[key];
    if (value === undefined || value === null) {
        assert(defaultValue !== undefined, `Missing environment variable: ${key}`);
        return defaultValue;
    }
    return value;
}