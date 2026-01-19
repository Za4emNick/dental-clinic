import {
  clinicAddress,
  yandexEmbedUrl,
  yandexMapUrl,
  yandexRouteUrl,
} from "../config/constants";

export function YandexMapEmbed() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-soft bg-white">
      <div className="aspect-[16/9] w-full">
        <iframe
          className="h-full w-full"
          title={`Карта — ${clinicAddress}`}
          src={yandexEmbedUrl}
          loading="lazy"
          allowFullScreen
        />
      </div>
      <div className="hidden absolute inset-0 bg-white p-6 text-sm text-slate-700" data-map-fallback>
        <div className="font-semibold text-slate-900">Мы на карте</div>
        <p className="mt-2">{clinicAddress}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={yandexMapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-4 py-2 text-xs font-semibold text-white"
          >
            Открыть карту
          </a>
          <a
            href={yandexRouteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
          >
            Построить маршрут
          </a>
        </div>
      </div>
    </div>
  );
}
