import style from'./dashboard.module.css';
import Image from "next/image";
import Link from 'next/link';

export default function page() {
    return(
        <main>
            <section  className={style.section}>
                <div>
                     <nav  className={style.nav}>
                     <Link href = '/dashboard'> <Image className={style.image} src="/images/salesianum-logo.png" alt="Salesianum Logo" width={50} height={63} priority/> </Link>
                        <Link href = '/dashboard' > Salesianum Film Festival </Link>
                         <Link href = '/movies' > Films </Link> 
                          </nav>
                </div>
            </section>
            <div className={style.mainpage}>
            <Image src="/images/salesianum-logo.png" alt="Placeholder Image" width={250} height={250} priority />
            <p className={style.p}>Date: TBD</p>


            </div>
            <div className={style.about}>
                <header className={style.head}>About Us</header>
                <p>Filler text to be filled out later. Use this to describe the school, film festival, and common information people would need to know.</p>
            </div>
        </main>
    );
}
