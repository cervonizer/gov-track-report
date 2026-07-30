import { Politician } from '@/types/politician';
import { politiciansData } from '@/data/politiciansData';
import lulaImg from '@/assets/politicians/lula.jpg';
import flavioImg from '@/assets/politicians/flavio-bolsonaro.jpg';
import caiadoImg from '@/assets/politicians/ronaldo-caiado.jpg';
import renanImg from '@/assets/politicians/renan-santos.jpg';
import zemaImg from '@/assets/politicians/romeu-zema.jpg';

const politicianImages: Record<string, string> = {
  '1': lulaImg,
  '2': flavioImg,
  '4': caiadoImg,
  '5': renanImg,
  '6': zemaImg,
};

export const mockPoliticians: Politician[] = politiciansData.map((p) => ({
  ...p,
  imageUrl: politicianImages[p.id] ?? p.imageUrl,
}));
