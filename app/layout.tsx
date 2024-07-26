import '../styles/global.css';

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
        <html lang='en'>
            <head>
                <title>
                    My Portfolio
                </title>
                <meta name='description' content='My personal portfolio website'/>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <header className='w-full bg-white shadow-md py-4'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <h1 className='text-3xl font-bold' >My Portfolio</h1>
                        <nav>
                            <a href="/" className='text-4xl mx-4'>Home</a>
                            <a href="/about" className='text-4xl mx-4 '  > About Me </a>
                            <a href="/projects" className='text-4xl mx-4 ' > My Projects </a>
                            <a href="/contact" className='text-4xl mx-4 ' > Contact Me </a>
                        </nav>
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} My Portfolio</p>
                </footer>
            </body>
        </html>
    )
}