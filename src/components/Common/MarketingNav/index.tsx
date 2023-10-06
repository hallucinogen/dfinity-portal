import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Search from "@site/src/theme/SearchBar";
import clsx from "clsx";
import React, { useEffect } from "react";
import LinkArrowLeft from "../Icons/LinkArrowLeft";
import LinkArrowUpRight from "../Icons/LinkArrowUpRight";

type SectionItem = {
  name: string;
  href: string;
  description: string;
};

type FeaturedItem = {
  title: string;
  href: string;
  image: string;
};

type Section = {
  name: string;
  items: SectionItem[];
  featured: FeaturedItem;
};

export type NavItem = {
  name: string;
  auxItems?: {
    name: string;
    href: string;
  }[];
  sections: Section[];
};

export type MarketingNavType = NavItem[];

const Arrow: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <div className="w-3 h-3 relative">
      <span
        className={clsx(
          "absolute left-[5px] top-0 w-[2px] h-full bg-infinite transition-transform",
          open ? "rotate-90" : ""
        )}
      ></span>
      <span
        className={clsx(
          "absolute top-[5px] left-0 h-[2px] w-full bg-infinite transition-opacity",
          open ? "opacity-0" : ""
        )}
      ></span>
    </div>
  );
};

const FeaturedArrowRight = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover/featured:-translate-y-2 transition-transform"
    >
      <path
        d="M13.5008 12L6.50044 4.99969L8.50012 3L17.5001 12L8.50012 21L6.50044 19.0003L13.5008 12Z"
        fill="white"
      />
    </svg>
  );
};

const Drawer: React.FC<{
  title: string;
  children?: React.ReactNode;
  startingState?: boolean;
}> = ({ title, children, startingState = false }) => {
  const [open, setOpen] = React.useState(startingState);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateHeight();

    function updateHeight() {
      if (open) {
        ref.current.style.maxHeight = ref.current.scrollHeight + "px";
      } else {
        ref.current.style.maxHeight = "0px";
      }
    }
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [open]);

  return (
    <div className="">
      <button
        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0 font-circular text-infinite"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="tw-heading-4">{title}</div>

        <Arrow open={open} />
      </button>
      <div
        ref={ref}
        className={clsx(
          "transition-all overflow-hidden",
          open ? "max-h-none" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className="appearance-none border-none bg-transparent w-10 h-10 -mr-2"
      onClick={onClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L18 18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M18.5 2L2.5 18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
};

const MarketingNav = () => {
  const { siteConfig } = useDocusaurusContext();
  const nav = siteConfig.customFields.marketingNav as MarketingNavType;
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [secondaryMobileNavOpen, setSecondaryMobileNavOpen] = React.useState<
    false | number
  >(false);
  const [selectedSection, setSelectedSection] = React.useState<Section | null>(
    nav[0].sections[0]
  );

  const hiddenRef = React.useRef(false);
  const lastScrollPosRef = React.useRef(0);
  const navbarRef = React.useRef<HTMLElement>(null);
  const hideOnScroll = (siteConfig.themeConfig as any).navbar
    .hideOnScroll as boolean;

  useEffect(() => {
    function onScroll() {
      // if not hidden and page is scrolled down, translate y to -100%
      // if hidden and page is scrolled up, translate y to 0

      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > lastScrollPosRef.current;

      if (isScrollingDown && !hiddenRef.current && currentScrollPos > 100) {
        hiddenRef.current = true;

        if (navbarRef.current) {
          navbarRef.current.style.transform = "translateY(-100%)";
        }
      } else if (!isScrollingDown && hiddenRef.current) {
        hiddenRef.current = false;

        if (navbarRef.current) {
          navbarRef.current.style.transform = "translateY(0)";
        }
      }

      lastScrollPosRef.current = currentScrollPos;
    }

    if (hideOnScroll) {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      if (hideOnScroll) {
        window.removeEventListener("scroll", onScroll);
        document.querySelector("body")!.style.overflow = "unset";
      }
    };
  }, []);

  // mobile nav side drawer
  const mobileNavClasses = mobileNavOpen
    ? "translate-x-0 pointer-events-auto"
    : "-translate-x-full pointer-events-none";

  const secondaryMobileNavClasses =
    secondaryMobileNavOpen !== false && mobileNavOpen
      ? "translate-x-0 pointer-events-auto"
      : "-translate-x-full pointer-events-none";

  function closeNav() {
    setMobileNavOpen(false);

    document.querySelector("body")!.style.overflow = "unset";
  }

  function openNav() {
    setMobileNavOpen(true);
    setSecondaryMobileNavOpen(false);
    document.querySelector("body")!.style.overflow = "hidden";
  }

  function toggleNav() {
    if (mobileNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  }

  function showFlyout(item: NavItem) {
    setSelectedSection(item.sections[0]);
  }

  function openSecondaryMobileNav(index: number) {
    setSecondaryMobileNavOpen(index);
  }

  return (
    <>
      <nav
        className="marketing-navbar z-[1000] pl-6 pr-4 py-4 md:px-12 md:pt-11 md:pb-5 text-black flex items-center justify-between bg-page dark-hero:bg-transparent sticky top-0 transition-transform"
        ref={navbarRef}
      >
        {/* logo */}
        <Link href="/" className="self-center flex items-center">
          <img src="/img/logo-notext.svg" alt="" className="h-5 md:h-7" />
        </Link>

        {/* middle desktop items */}
        <div className="hidden md:flex gap-4 items-center">
          {nav.map((item) => (
            <div
              className="border-none bg-transparent px-4 py-[2px] text-black dark-hero:text-white m-0 font-medium text-paragraph rounded-full group hover:bg-infinite hover:text-white hover:dark-hero:bg-white/20 cursor-pointer"
              key={item.name}
              onMouseEnter={() => showFlyout(item)}
            >
              {item.name}

              <div className="absolute z-[1000] top-20 left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none invisible group-hover:opacity-100 group-hover:pointer-events-auto group-hover:visible">
                <div className="shadow-2xl dark-hero:shadow-none bg-white rounded-3xl overflow-hidden hidden md:flex flex-col">
                  <div className="flex-1 flex">
                    {item.sections.length > 1 && (
                      <div className="bg-[#F1EEF5] p-6 flex flex-col gap-3 items-stretch min-w-[220px]">
                        {item.sections.map((section) => (
                          <button
                            key={section.name}
                            onMouseEnter={() => setSelectedSection(section)}
                            onClick={() => setSelectedSection(section)}
                            className={`text-left appearance-none border-none rounded-xl font-circular font-medium text-[16px] leading-[22px] px-4 py-6 ${
                              selectedSection === section
                                ? "text-infinite bg-white"
                                : "text-[#666] bg-transparent"
                            }`}
                          >
                            {section.name}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-1 pl-8 pr-6 py-6 bg-white">
                      <div className="flex-1 flex flex-col gap-5 min-w-[256px] pr-6">
                        {selectedSection.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-black hover:no-underline group/item hover:text-infinite flex flex-col"
                          >
                            <span className="font-medium text-[16px] leading-[22px]">
                              {item.name}
                            </span>

                            <span className="text-[14px] leading-[22px] font-normal text-black/60 group-hover/item:text-infinite">
                              {item.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                      {selectedSection.featured && (
                        <div className="flex-1 pl-6">
                          <Link
                            style={{
                              backgroundImage: `url(${selectedSection.featured.image})`,
                            }}
                            className="bg-cover bg-center aspect-video rounded-xl flex w-[300px] p-6 group/featured hover:no-underline"
                            href={selectedSection.featured.href}
                          >
                            <span className="text-[24px] leading-[26px] font-bold text-white flex-1 group-hover/featured:-translate-y-2 transition-transform">
                              {selectedSection.featured.title}
                            </span>

                            <FeaturedArrowRight />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-[#FAFAFA] py-6 px-10 flex gap-8 items-center">
                    {item.auxItems.map((item) => (
                      <Link
                        className="font-bold text-[11px] uppercase whitespace-nowrap flex items-center gap-1"
                        key={item.name}
                      >
                        {item.name}
                        <LinkArrowUpRight className="w-[14px]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* right side items: search and hamburger on mobile */}
        <div className="flex gap-4 items-center">
          <Search />
          <button
            className="md:hidden flex flex-col gap-[6px] border-none bg-transparent px-[9px] h-10 w-10 p-0 justify-center"
            onClick={toggleNav}
          >
            <span className="bg-black dark-hero:bg-white h-[2px] w-full shrink-0"></span>
            <span className="bg-black dark-hero:bg-white h-[2px] w-full shrink-0"></span>
            <span className="bg-black dark-hero:bg-white h-[2px] w-full shrink-0"></span>
          </button>
        </div>
      </nav>

      {/* Level 1 of mobile fly-in menu */}
      <div
        className={`fixed inset-0 bg-white z-[1000] px-6 py-4 transition-transform ${mobileNavClasses}`}
      >
        {/* logo + close button */}
        <div className="flex items-center justify-between ">
          <img src="/img/logo-notext.svg" alt="" className="h-5" />
          <CloseButton onClick={closeNav} />
        </div>

        {/* top level items */}
        <ul className="list-none p-0 flex flex-col gap-6 mt-8 mb-0">
          {nav.map((item, index) => (
            <li className="p-0" key={item.name}>
              <button
                className="border-none bg-transparent p-0 text-infinite m-0 font-circular tw-heading-4"
                onClick={() => openSecondaryMobileNav(index)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Level 2 of mobile fly-in menu*/}
      <div
        className={`overflow-auto touch-none fixed inset-0 bg-white z-[1000] px-6 py-4 transition-transform ${secondaryMobileNavClasses}`}
      >
        {/* Back button + close button */}
        <div className="flex items-center justify-between">
          <button
            className="flex items-center gap-6 tw-heading-7 font-circular bg-transparent p-0 text-left border-none"
            onClick={() => setSecondaryMobileNavOpen(false)}
          >
            <LinkArrowLeft />
            Home
          </button>
          <CloseButton onClick={closeNav} />
        </div>

        {/* list of sections */}
        {secondaryMobileNavOpen !== false && (
          <>
            <ul className="list-none p-0 flex flex-col gap-6 mt-8 pb-10 mb-0">
              {nav[secondaryMobileNavOpen].sections.map((item, index) => (
                <li className="p-0" key={item.name}>
                  <Drawer title={item.name} startingState={index === 0}>
                    {/* list of section items */}
                    <ul className="list-none p-0 flex flex-col gap-3 mt-5 mb-6">
                      {item.items.map((item) => (
                        <li className="p-0" key={item.name}>
                          <Link
                            className="border-none bg-transparent p-0 text-infinite m-0 tw-heading-7 hover:no-underline hover:text-black"
                            href={item.href}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* featured item */}
                    {item.featured && (
                      <Link
                        href={item.featured.href}
                        className="mb-6 h-30 w-full bg-center bg-cover relative p-6 no-underline hover:no-underline rounded-xl flex"
                        style={{
                          backgroundImage: `url(${item.featured.image})`,
                        }}
                      >
                        <span className="text-white tw-heading-5 flex-1">
                          {item.featured.title}
                        </span>
                        <FeaturedArrowRight />
                      </Link>
                    )}
                  </Drawer>
                </li>
              ))}
            </ul>

            {/* aux items */}
            {nav[secondaryMobileNavOpen].auxItems && (
              <ul className="relative list-none p-0 flex flex-col gap-3 mt-4 mb-12 pt-6 border-0 border-t border-solid border-grey-300">
                {nav[secondaryMobileNavOpen].auxItems.map((item) => (
                  <li>
                    <Link
                      href={item.href}
                      className="text-infinite tw-button-xs inline-flex gap-2 items-center hover:no-underline hover:text-black"
                    >
                      {item.name}

                      <LinkArrowUpRight className="w-[14px]" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MarketingNav;
