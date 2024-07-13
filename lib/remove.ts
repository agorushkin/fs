/**
 * Remove a file or directory.
 */
export const remove = async (path: string): Promise<boolean> => {
  return await Deno.remove(path)
    .then(() => true)
    .catch(() => false);
};
