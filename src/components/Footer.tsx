import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Container from "./ui/container"

export default function Footer() {
  return (
    <footer className="bg-primary-foreground py-12 absolute bottom-0 w-full">
        <Container>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    <div className="flex gap-x-6 mx-auto xl:mx-0 mb-4">
                        <Link to=''>
                            <Facebook className="h-6 w-6"/>
                        </Link>
                        <Link to=''>
                            <Instagram className="h-6 w-6"/>
                        </Link>
                        <Link to=''>
                            <Linkedin className="h-6 w-6"/>
                        </Link>
                        <Link to=''>
                            <Twitter className="h-6 w-6"/>
                        </Link>
                    </div>
                    <div className="text-muted-foreground mx-auto">
                        Copyright &copy; Swaraj Ballal. All rights reserved.
                    </div>
                </div>
            </div>
        </Container>
    </footer>
  )
}