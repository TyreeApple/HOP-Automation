import { useEffect } from 'react';

export const useVideoSecurity = () => {
  useEffect(() => {
    // Disable keyboard shortcuts that could be used to download video
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+S (Save), Ctrl+Shift+I (DevTools), F12 (DevTools)
      if (
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable right-click context menu globally
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
      }
    };

    // Disable drag and drop for videos
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);
};