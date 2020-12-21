function Image(props) {
  const { source, source2x, alt, className } = props;

  if (!source && !source2x) {
    return null;
  }

  const customSrc = source ? `${source} 1x` : '';
  const customSrc2x = source2x ? `${source2x} 2x` : '';

  return (
    <picture>
      <source
        media='(min-width: 1024px)'
        srcSet={`${customSrc} ${customSrc2x}`}
      />
      <img
        src={source}
        alt={alt || 'Site'}
        srcSet={`${customSrc} ${customSrc2x}`}
        className={className}
      />
    </picture>
  );
}

export default Image;
