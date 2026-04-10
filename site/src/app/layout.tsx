import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SafetyBanner from "@/components/SafetyBanner";
import SearchBar from "@/components/SearchBar";
import { getNavigation, getSearchData } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Access To Peace",
  description: "Trauma-informed conflict resolution, mediation, and peace-building platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navigation = getNavigation();
  const searchData = getSearchData();

  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col font-sans">
        <SafetyBanner />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar navigation={navigation} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="border-b border-slate-200 px-6 py-3 flex items-center justify-between bg-white">
              <h1 className="text-sm font-semibold text-slate-700">Documentation</h1>
              <SearchBar searchData={searchData} />
            </header>
            <main className="flex-1 overflow-y-auto px-8 py-6 max-w-4xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
