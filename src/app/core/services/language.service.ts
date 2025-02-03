import { inject, Injectable, signal } from '@angular/core';
import {
  InterpolationParameters,
  TranslateService,
  Translation,
  TranslationObject,
} from '@ngx-translate/core';
import { Observable } from 'rxjs';
import {
  DEFAULT_LANGUAGE,
  STORAGE_LANGUAGE_KEY,
  SUPPORTED_LANGUAGES,
} from '@core/lib/constants/language';

// import { loadMessages, locale } from 'devextreme/localization';
// import esMessages from 'devextreme/localization/messages/es.json';
// import enMessages from 'devextreme/localization/messages/en.json';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  translate = inject(TranslateService);
  currentLanguage = signal<string>(DEFAULT_LANGUAGE);

  constructor() {
    this.translate.addLangs(SUPPORTED_LANGUAGES);
    this.translate.setDefaultLang(DEFAULT_LANGUAGE);

    const configuredLanguage = localStorage.getItem(STORAGE_LANGUAGE_KEY);

    const appLanguage = this.validateLanguageOrDefault(
      configuredLanguage ?? this.translate.getBrowserLang() ?? ''
    );

    this.setInitialAppLanguage(appLanguage);
  }

  private setInitialAppLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage.set(language);

    // this.initMessages();
    // locale(language);

    localStorage.setItem(STORAGE_LANGUAGE_KEY, language);
  }

  get(
    key: string | string[],
    interpolateParams?: InterpolationParameters
  ): Observable<Translation | TranslationObject> {
    return this.translate.get(key, interpolateParams);
  }

  stream(
    key: string | string[],
    interpolateParams?: InterpolationParameters
  ): Observable<Translation | TranslationObject> {
    return this.translate.stream(key, interpolateParams);
  }

  setLanguage(language: string, saveToStorage = true): void {
    const validLanguage = this.validateLanguageOrDefault(language);

    if (validLanguage === this.currentLanguage()) {
      return;
    }

    if (saveToStorage) {
      localStorage.setItem(STORAGE_LANGUAGE_KEY, validLanguage);
    }

    // SOLO NECESARIO PARA QUE LOS COMPONENTES DE DEX-EXTREME CAMBIEN
    // location.reload();
  }

  private validateLanguageOrDefault(language: string): string {
    return language && SUPPORTED_LANGUAGES.includes(language)
      ? language
      : DEFAULT_LANGUAGE;
  }

  // private initMessages() {
  //   loadMessages(enMessages);
  //   loadMessages(esMessages);
  // }
}
