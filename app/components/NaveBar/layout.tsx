import NaveBar from "./page";



interface myChildren {
    children: React.ReactNode
}

const Layout = ({ children }: myChildren) => {

    return (
        <html lang="en">
            <body >
                <NaveBar />
                {children}

            </body>
        </html>
    );

}

export default Layout;