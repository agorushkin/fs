/**
 * Write data to a file.
 */
export const write = async <T extends boolean>(
  path: string,
  data: T extends true ? string : Uint8Array,
): Promise<boolean> => {
  return await (data instanceof Uint8Array
    ? Deno.writeFile(path, data)
    : Deno.writeTextFile(path, data))
    .then(() => true)
    .catch(() => false);
};
