import Button from "@/components/ui/button";
import Link from "next/link";

function Home() {
  return (
    <div className="h-full flex justify-center items-center flex-col gap-24 mt-28">
      <div className="text-5xl font-bold text-center flex flex-col gap-6">
        <h1>Good news, everyone!</h1>
        <h2>You got to our quiz</h2>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-semibold text-center">Wanna try to go deeper?</h2>
        <div className="flex flex-row justify-between gap-10">
        <Link href={'/start-page'}>
        <Button size='lg' variant="primary">Sure, I do!</Button>
        </Link>
        <Link href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
        <Button size="lg" variant="danger">Nah, I'm a slug</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
