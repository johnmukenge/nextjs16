import Hello from "@/components/hello";

console.log("What type of a component am I?");

const Home = () => {
  return (
    <main>
      <div className="text-5xl underline">Welcome to Next.js!</div>
      <Hello />
    </main>
  );
};

export default Home;
