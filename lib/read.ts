import { fail, pass, Result } from './util.ts';

/**
 * Read the contents of a file.
 */
export const read = async <T extends boolean>(
  path: string,
  text: T,
): Promise<Result<T extends true ? string : Uint8Array>> => {
  try {
    const data = await (text ? Deno.readTextFile(path) : Deno.readFile(path));
    return pass(data as T extends true ? string : Uint8Array);
  } catch (error) {
    return fail(error);
  }
};
