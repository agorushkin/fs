/**
 * Make a directory.
 */
export const make = async (path: string): Promise<boolean> => {
  return await Deno.mkdir(path)
    .then(() => true)
    .catch(() => false);
};
