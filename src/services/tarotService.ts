import { MockTarotRepository } from './mockTarotRepository';
import type { TarotRepository } from '../types/repository.types';
import type { TarotCard } from '../types/tarot.types';

interface TarotService {
  listCards(): Promise<readonly TarotCard[]>;
  getCard(cardId: string): Promise<TarotCard | null>;
}

export const createTarotService = (repository: TarotRepository): TarotService => ({
  listCards: () => repository.getAllCards(),
  getCard: (cardId: string) => repository.getCardById(cardId),
});

export const tarotService = createTarotService(new MockTarotRepository());
