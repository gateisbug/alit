import { useEffect } from 'react';

export function useScrollBlock(trigger: boolean, style?: string) {
  useEffect(() => {
    const idx = document.body.getAttribute('data-index') ?? '0';
    const index = Number(idx);

    const sbWidth = window.innerWidth - document.documentElement.clientWidth;

    if (trigger) {
      if (index === 0) {
        document.body.setAttribute(
          'style',
          style ?? `overflow: hidden; padding-right: ${sbWidth}px`,
        );
        document.body.setAttribute('data-index', '1');
      } else {
        document.body.setAttribute('data-index', (index + 1).toString());
      }
    } else {
      if (index <= 1) {
        document.body.removeAttribute('style');
        document.body.removeAttribute('data-index');
      } else {
        document.body.setAttribute('data-index', (index - 1).toString());
      }
    }
  }, [trigger, style]);
}
