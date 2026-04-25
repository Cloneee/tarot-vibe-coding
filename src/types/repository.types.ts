import type { TarotCard } from './tarot.types';

export interface TarotRepository {
  getAllCards(): Promise<readonly TarotCard[]>;
  getCardById(cardId: string): Promise<TarotCard | null>;
}
