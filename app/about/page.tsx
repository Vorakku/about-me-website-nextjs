export default function About() {
    return <div className=" flex w-full bg-gray-100">
        <div className="w-[550px]  p-4">
            <img 
            className="overflow-clip rounded-3xl"
            src="https://i.ytimg.com/vi/j5KxavNU4M4/maxresdefault.jpg" alt="" />
        </div>
        <div className="flex flex-col px-8">
            <h2 className="text-3xl font-bold my-8 w-50% ">Where I come from</h2>
            <p>
                I am currently a soon to be senior majoring in Computer Science at Paragon Internation 
                Universtiy short for "PIU".
            </p>
        </div>
    </div>
}