import { Character, Reaction } from '../types';

export async function fetchCharacters(name: string, page: number, limit: number) {
  const res = await fetch(`/api/characters?name=${name}&page=${page}&limit=${limit}`);
  return res.json();
}

export async function fetchReactions(): Promise<{ reactions: Reaction[] }> {
  const res = await fetch('/api/reactions');
  return res.json();
}