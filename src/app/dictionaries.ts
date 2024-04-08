import en from '../dictionaries/en.json';
import ru from '../dictionaries/ru.json';
import kg from '../dictionaries/kg.json';

const dictionaries: Record<string, any> = {
  en,
  ru,
  kg,
};

export const getDictionary = (locale: string) => dictionaries[locale];
