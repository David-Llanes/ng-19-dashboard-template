import { HttpInterceptorFn } from '@angular/common/http';
import { DEFAULT_LANGUAGE, STORAGE_LANGUAGE_KEY } from '@core/lib/constants/language';

export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const language = localStorage.getItem(STORAGE_LANGUAGE_KEY) ?? DEFAULT_LANGUAGE;

  const newReq = req.clone({
    headers: req.headers.set('App-Language', language),
  });

  return next(newReq);
};
