import Link from 'next/link'

export default function LinkClassNameExample(){
    return(
        <Link href="/">
        <a className="foo" target="_blank" rel="noopener noreferrer">
            Hello World
        </a>
        </Link>
    )
}