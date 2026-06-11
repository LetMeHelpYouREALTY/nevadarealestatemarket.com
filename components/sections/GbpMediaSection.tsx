import Image from "next/image";
import Link from "next/link";
import { Camera, ExternalLink, Play, Upload, Video } from "lucide-react";
import {
  gbpPhotoUploadPlan,
  gbpPhotos,
  gbpVideos,
  gbpMediaLinks,
} from "@/lib/gbp-media";
import { siteConfig } from "@/lib/site-config";

type GbpMediaSectionProps = {
  showUploadGuide?: boolean;
};

export default function GbpMediaSection({
  showUploadGuide = true,
}: GbpMediaSectionProps) {
  const hasPhotos = gbpPhotos.length > 0;

  return (
    <section id="photos" className="max-w-5xl mx-auto mb-16 scroll-mt-28">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-3">
          <Camera className="h-5 w-5" aria-hidden />
          Photos & Videos
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Henderson Luxury Real Estate in Pictures
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          See {siteConfig.name} — office, Henderson communities, luxury homes,
          and client success stories. Also on{" "}
          <Link
            href={gbpMediaLinks.youtube}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </Link>
          ,{" "}
          <Link
            href={gbpMediaLinks.instagram}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          , and{" "}
          <Link
            href={gbpMediaLinks.googleMapsPhotos}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </Link>
          .
        </p>
      </div>

      {hasPhotos ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {gbpPhotos.map((photo) => (
            <figure
              key={photo.id}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              {photo.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-sm">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {gbpPhotoUploadPlan.map((plan) => (
            <div
              key={plan.category}
              className="border border-dashed border-slate-300 rounded-xl p-6 bg-slate-50"
            >
              <div className="flex items-start gap-3">
                <Upload
                  className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"
                  aria-hidden
                />
                <div>
                  <h3 className="font-bold text-slate-900">{plan.category}</h3>
                  <p className="text-xs text-blue-600 font-medium mt-1">
                    GBP: {plan.gbpLabel} · {plan.targetCount}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    {plan.description}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-500">
                    {plan.examples.map((example) => (
                      <li key={example}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Videos */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Video className="h-5 w-5 text-blue-600" aria-hidden />
          Videos
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {gbpVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              {video.youtubeId ? (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center">
                  <Play className="h-12 w-12 text-blue-400 mb-3" aria-hidden />
                  <p className="font-semibold mb-2">{video.title}</p>
                  <p className="text-sm text-slate-300 mb-4">
                    {video.description}
                  </p>
                  <Link
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Watch on {video.id.includes("tiktok") ? "TikTok" : "YouTube"}
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              )}
              {video.youtubeId && (
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900">{video.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    {video.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showUploadGuide && !hasPhotos && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <p className="text-slate-700 mb-4">
            <strong>For GBP:</strong> In Google Business Profile, go to{" "}
            <em>Add photos and videos</em> and upload the categories above.
            Posting as{" "}
            <strong>{siteConfig.fullName}</strong>. Use the same images on this
            site by saving to <code className="text-sm">public/images/gbp/</code>{" "}
            and adding entries in{" "}
            <code className="text-sm">lib/gbp-media.ts</code>.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={gbpMediaLinks.googleMapsPhotos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View on Google Maps
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={gbpMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Instagram Gallery
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
