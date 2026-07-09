import Header from "../components/Header/Header.jsx"

export default function MainLayout({children}) {
    return(
        <section>
            <main>{children}</main>
        </section>
    );
}