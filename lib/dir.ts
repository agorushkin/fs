import { fail, pass, Result } from './util.ts';

type Entry = {
  name: string;
  type: 'file' | 'dir' | 'symlink';
};

/**
 * Read the contents of a directory.
 */
export const dir = async (path: string): Promise<Result<Entry[]>> => {
  try {
    const entries: Entry[] = [];

    for await (const entry of Deno.readDir(path)) {
      const type = entry.isFile
        ? 'file'
        : entry.isDirectory
        ? 'dir'
        : 'symlink';
      entries.push({ name: entry.name, type });
    }

    return pass(entries);
  } catch (error) {
    return fail(error);
  }
};
