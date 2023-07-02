import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const languages = [
  'Hello!', // English
  '你好!', // Chinese
  'Bonjour!', // French
  '¡Hola!', // Spanish
  'Ciao!', // Italian
  'שלום!', // Hebrew
  'Olá!', // Portuguese

  // Add more languages as needed
];

export default class HelloCyclerComponent extends Component {
  @tracked currentLanguageIndex = 0;

  init() {
    super.init(...arguments);
  }

  get currentLanguage() {
    return languages[this.currentLanguageIndex];
  }

  updateLanguage() {
    this.currentLanguageIndex =
      (this.currentLanguageIndex + 1) % languages.length;
  }

  constructor() {
    super(...arguments);
    setInterval(() => {
      this.updateLanguage();
    }, 3000); // Change language every 3 seconds (adjust as needed)
  }
}
