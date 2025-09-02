

interface my1 {
    children: React.ReactNode
}

function Container({ children }: my1) {
    return (
        <div className="container mx-auto ">
            {children}
        </div>
    )
}
export default Container;