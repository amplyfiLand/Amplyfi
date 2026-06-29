export enum LandingAssetKey {
  Hero = "hero",
  Woman = "woman",
  MountainDivider = "mountainDivider",
  Obsidian1 = "obsidian1",
  Obsidian2 = "obsidian2",
  ContactMountain = "contactMountain",
  IconPulse = "iconPulse",
  IconStar = "iconStar",
  IconArrow = "iconArrow",
  IconArrowHead = "iconArrowHead",
  Waveform = "waveform"
}

export const landingAssets: Record<LandingAssetKey, string> = {
  [LandingAssetKey.Hero]: "/assets/hero.png",
  [LandingAssetKey.Woman]: "/assets/fig-artist.png",
  [LandingAssetKey.MountainDivider]: "/assets/mountain-divider.png",
  [LandingAssetKey.Obsidian1]: "/assets/obsidian-1.png",
  [LandingAssetKey.Obsidian2]: "/assets/obsidian-2.png",
  [LandingAssetKey.ContactMountain]: "/assets/fig-mountain-hero.png",
  [LandingAssetKey.IconPulse]: "/assets/icon-pulse.svg",
  [LandingAssetKey.IconStar]: "/assets/icon-star.svg",
  [LandingAssetKey.IconArrow]: "/assets/icon-arrow.svg",
  [LandingAssetKey.IconArrowHead]: "/assets/icon-arrow-head.svg",
  [LandingAssetKey.Waveform]: "/assets/fig-waveform-wide.png"
};
