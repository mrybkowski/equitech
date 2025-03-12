export default function Home() {
  return (
    <div>
      <header className="container mx-auto flex items-center justify-between text-[#1B3540]">
        <p className="font-bold py-10">EQUITECH</p>
        <div className="py-10 flex flex-col">
          <p>
            <span className="font-bold">Email: </span>marcin@rybkowski.pl
          </p>
          <p>
            <span className="font-bold">Phone:</span> +48 519 439 762
          </p>
        </div>
      </header>
      <main className="container mx-auto flex items-center justify-center py-32">
        <h1 className="text-[#1B3540] text-6xl font-semibold text-balance text-center">
          Oops! This website is currently under construction!
        </h1>
      </main>
    </div>
  );
}
