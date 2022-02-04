import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import HeaderNavbar from './HeaderNavbar'

export default function Header() {
    let headerTitleStyle = "hidden h-6 text-2xl font-semibold sm:block";
    let headerTitle = (typeof(siteMetadata.headerTitle)==='string')?(
            <div className={headerTitleStyle}>{siteMetadata.headerTitle}</div>
        ):(
            siteMetadata.headerTitle
        );

    return (
        <header className="flex items-center justify-between py-10">
            <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="flex items-center justify-between">
                        <div className="mr-3">
                            <Logo />
                        </div>
                        {headerTitle}
                    </div>
                </Link>
            </div>
            <div className="flex items-center text-base leading-5">
                <HeaderNavbar />
                <ThemeSwitch />
                <MobileNav />
            </div>
        </header>
    )
  }