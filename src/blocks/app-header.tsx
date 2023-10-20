export default function AppHeader() {
  return (
    <header className="w-full h-16 fixed top-0 left-0 right-0 bg-transparent backdrop-blur-3xl">
      <nav className="w-full h-full mx-auto flex max-w-8xl p-6 lg:px-8 gap-2">
        <div className="flex basis-1/3 items-center justify-start"></div>
        <div className="flex basis-1/3 items-center justify-center">t</div>
        <div className="flex basis-1/3 items-center justify-end gap-6">
          <p className="text-white">Blog</p>
          <p className="text-white">Contact</p>
        </div>
      </nav>
    </header>
  );
}
