import { Footer } from "./footer.component";
import { Meta } from "./meta.component";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />

      <div className="flex min-h-screen flex-col justify-center py-2">
        {children}
      </div>

      <Footer />
    </>
  );
};
