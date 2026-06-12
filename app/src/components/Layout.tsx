import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { MobileActionBar } from './MobileActionBar';
import { ScrollToTop } from './ScrollToTop';
import { FloatingButtons } from './FloatingButtons';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="min-h-[60dvh]">{children}</main>
      <Footer />
      <MobileActionBar />
      <FloatingButtons />
    </>
  );
}
