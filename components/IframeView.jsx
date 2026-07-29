import { OverlayActions } from "@/components/OverlayActions";
import { ProjectHeader } from "@/components/ProjectHeader";

export function IframeView({ menuOpen, onBack, onFullscreen, onHome, onMenuToggle, title, url }) {
  return (
    <section className="overlay-page iframe-view" aria-label={title}>
      <div className="overlay-header">
        <ProjectHeader onBack={onBack} onHome={onHome} />
        <OverlayActions
          menuOpen={menuOpen}
          onFullscreen={onFullscreen}
          onMenuToggle={onMenuToggle}
        />
      </div>
      <div className="overlay-body">
        <iframe src={url} title={title} loading="lazy" />
      </div>
    </section>
  );
}
