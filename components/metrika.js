import { useEffect } from "react";
import { useRouter } from "next/router";

export function Metrika() {
  const router = useRouter();
  const { pathname, asPath } = router;

  useEffect(() => {
    // Check if the Yandex Metrika script is already loaded
    if (!window.ym) {
      // Create the script element
      const script = document.createElement('script');
      script.src = "https://mc.yandex.ru/metrika/tag.js";
      script.async = true;
      script.onload = () => {
        // Initialize Yandex Metrika once the script is loaded
        ym(97927750, "init", {
          defer: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        });
        // Track the page view
        ym(97927750, "hit", window.location.href);
      };
      // Append the script to the document head
      document.head.appendChild(script);
    } else {
      // If the script is already loaded, just track the page view
      ym(97927750, "hit", window.location.href);
    }
  }, [pathname, asPath]);

  return null; // This component doesn't need to render anything
}
