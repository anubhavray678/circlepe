import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import Property from "@/components/Property/Property";
import SearchBar from "@/components/searchBar/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full pl-5 pr-5 pt-28">
        <SearchBar />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Property />

        <BottomNavBar />
      </main>
    </div>
  );
}
