import * as fs from 'fs/promises';
import * as path from 'path';

const jsonPath = path.join(__dirname, 'artists.json');

export async function getArtistNamesTemplate() {
  return await fs.readFile(jsonPath, {encoding: 'utf8'});
}
