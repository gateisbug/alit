import React from 'react';

export function useTextareaAutoResize(
  internalRef: React.RefObject<HTMLTextAreaElement>,
  autoResize?: boolean,
  maxHeight?: number,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>,
) {
  const resizeInChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = internalRef.current;
      if (autoResize && textarea) {
        textarea.style.height = 'auto';
        const newHeight = maxHeight
          ? Math.min(textarea.scrollHeight, maxHeight)
          : textarea.scrollHeight;
        textarea.style.height = newHeight + 'px';

        if (maxHeight === undefined) textarea.style.overflowY = 'hidden';
        else {
          textarea.style.overflowY =
            e.target.value.length > 0 && textarea.scrollHeight > maxHeight
              ? 'auto'
              : 'hidden';
        }
      }

      onChange && onChange(e);
    },
    [autoResize, maxHeight, onChange],
  );

  return { resizeInChange };
}
