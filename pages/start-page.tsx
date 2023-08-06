import Button from "@/components/ui/button"
import Link from "next/link"

function StartPage(){
    return(
        <div className="flex flex-col justify-center items-center mt-28 text-center gap-16">
            <div className="flex flex-col gap-5">
            <h1 className="text-5xl">You're about to have 15 questions</h1>
            <h2 className="text-4xl">For every of it you'll have only 15 seconds</h2>
            <h2 className="text-4xl w-[900px]">For answering on every question you'll get nothing! Isn't it cool?</h2>
            </div>
            <div className="flex flex-col gap-2 text-3xl">
                <h2>So, to start just click on the button below</h2>
                <h2 className="text-2xl text-slate-300">Don't mess up on the very last question</h2>
            </div>
            <Link href={'/quiz'}>
            <Button size="lg" variant="primary" className={'px-12'}>Start!</Button>
            </Link>
            
        </div>
    )
}

export default StartPage