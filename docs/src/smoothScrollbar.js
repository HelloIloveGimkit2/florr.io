import Scrollbar from 'smooth-scrollbar';

export default function initSmoothScrollbar() {
  if (typeof window !== 'undefined') {
    // Initialize Smooth Scrollbar
    const options = {
      damping: .01, // Adjust scroll damping
    };

    const scrollArea = document.querySelector('#__docusaurus');
    if (scrollArea) {
      Scrollbar.init(scrollArea, options);
    }
  }
}
