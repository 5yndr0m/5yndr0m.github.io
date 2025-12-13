export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-nord8 to-nord9 bg-clip-text text-transparent animate-pulse">
          Syndrom
        </h1>
        <p className="text-xl md:text-2xl text-nord4/80 font-light">
          Cybersecurity Researcher & Developer
        </p>
      </div>
    </div>
  );
}
