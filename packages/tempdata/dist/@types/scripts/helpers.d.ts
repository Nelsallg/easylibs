/**
 * Checks if an element matches all specified criteria.
 *
 * This function iterates over each key in the criteria object and checks if the element has a matching value for each key.
 *
 * @param element - The element to check, represented as a record of string keys to any values.
 * @param criteria - The criteria to match against, represented as a record of string keys to any values.
 * @returns A boolean value indicating whether the element matches all the criteria. Returns `true` if all criteria are matched, `false` otherwise.
 */
export declare function matchesCriteria(element: Record<string, any>, criteria: Record<string, any>): boolean;
/**
 * Searches for a key within an object that includes a specified substring. Optionally, returns the key name instead of its value.
 *
 * @param object - The object to search through.
 * @param substring - The substring to look for within the object's keys.
 * @param getValue - Optional. If `true`, returns the key name that includes the substring. If `false` or omitted, returns the value of the first matching key.
 * @returns The value of the first key that includes the substring, the name of the first key that includes the substring if `getValue` is `true`, or `false` if no matching key is found.
 */
export declare function hasKeyWithNameSubstring(object: Record<string, any>, substring: string, getValue?: boolean): any;
/**
 * Searches for the first occurrence of a character within a string that represents a number up to a specified limit.
 *
 * This function iterates through numbers from 0 up to the specified limit and checks if the string contains that number as a character.
 *
 * @param value - The string to search within.
 * @param limit - The maximum number to check for within the string.
 * @param returnBool - Optional. If `true`, the function returns a boolean indicating whether any character was found. If `false` or omitted, returns the character itself.
 * @returns If `returnBool` is `true`, returns `true` if a matching character is found or `false` otherwise. If `returnBool` is `false`, returns the first found character as a string, or `null` if no character is found.
 */
export declare function findChar(value: string, limit: number, returnBool?: boolean): string | boolean;
