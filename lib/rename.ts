/**
 * Rename a file or directory.
 */
export const rename = async (
  path: string,
  target: string,
): Promise<boolean> => {
  return await Deno.rename(path, target)
    .then(() => true)
    .catch(() => false);
};
