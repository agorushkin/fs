/**
 * Copy a file from source to target.
 */
export const copy = async (
  source: string,
  target: string,
): Promise<boolean> => {
  return await Deno.copyFile(source, target)
    .then(() => true)
    .catch(() => false);
};
