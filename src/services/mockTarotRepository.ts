import { tarotCards } from '../data/tarotCards.data';
import type { TarotRepository } from '../types/repository.types';
import type { TarotCard } from '../types/tarot.types';

export class MockTarotRepository implements TarotRepository {
  public async getAllCards(): Promise<readonly TarotCard[]> {
    return tarotCards;
  }

  public async getCardById(cardId: string): Promise<TarotCard | null> {
    return tarotCards.find((card) => card.id === cardId) ?? null;
  }
}
