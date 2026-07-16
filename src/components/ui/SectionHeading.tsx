interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

/**
 * Keeps each section named for assistive technology without reserving visual
 * space for a repeated eyebrow/title/subtitle banner.
 */
const SectionHeading = ({ title }: SectionHeadingProps) => (
  <h2 className="sr-only">{title}</h2>
);

export default SectionHeading;
