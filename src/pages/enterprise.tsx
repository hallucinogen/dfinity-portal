import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

function EnterprisePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="Enterprise"
      description={`Build next generation enterprise systems on autonomous cloud, powered by chain-key cryptography and secure multiparty computation — no bloated security departments needed`}
      editPath={`https://github.com/dfinity/portal/edit/master/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-defi.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <section
          className="overflow-hidden bg-infinite text-white pt-20"
          ref={heroRef}
        >
          <AnimateSpawn
            className="container-10 pt-20 pb-40 md:pb-52 md:pt-36 relative"
            variants={transitions.container}
          >
            <div className="blob blob-white blob-xl md:blob-xl md:blob-x-8 md:blob-y-10 opacity-100"></div>
            <div className="md:w-7/10 relative">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6"
                variants={transitions.item}
              >
                Enterprise built on autonomous cloud
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                Build next generation enterprise systems on autonomous cloud,
                powered by chain-key cryptography and secure multiparty
                computation.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="container-12 relative"
          el={motion.section}
          variants={transitions.fadeIn}
        >
          <div className="text-center md:w-5/10 relative md:absolute top-30 sm:top-40 md:top-0 -translate-y-1/2 right-0 -mt-30 md:-mt-24">
            <img
              src="/img/enterprise/enterprise-hero-image.webp"
              alt=""
              className="w-full max-w-sm sm:max-w-lg md:max-w-none"
            />
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-10 md:mt-30 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="md:w-6/10">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Having to maintain legacy code, increasing development costs and talent fleeing to
              new, exciting technologies — Companies have to overcome several challenges to stay
              ahead of the competition.
            </motion.h2>
          </div>
        </AnimateSpawn>

        <section className="mt-20 md:mt-48">
          <div className="container-10">
            <h2 className="tw-heading-3 md:tw-heading-60 text-black md:w-6/10 md:mx-auto text-center mb-10 md:mb-16">
              Autonomous cloud for enterprises
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/development-costs-2.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Secure doc workflow
                </h3>
                <p className="tw-paragraph mb-0">
                  Businesses can operate with leaner teams, as the security is
                  built into the protocol itself
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/digital-identity.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Digital identity layer
                </h3>
                <p className="tw-paragraph mb-0">
                  No need to build proprietary identity solutions or rely on
                  for-profit companies to keep user’s data safe and private{" "}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/loyalty-programs.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Tokenized reward programs
                </h3>
                <p className="tw-paragraph mb-0">
                  Customer loyalty & employee reward programs simplified using
                  tokens
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/secure-sharing.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Secure data sharing
                </h3>
                <p className="tw-paragraph mb-0">
                  Zero knowledge proofs enable secure and private sharing of
                  sensitive data
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/ownership.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Simple self-custody
                </h3>
                <p className="tw-paragraph mb-0">
                  Users can take real ownership of their own data, and digital
                  assets
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/supply-chain.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">Supply chain</h3>
                <p className="tw-paragraph mb-0">
                  Blockchain’s transparency & immutability allow for easy
                  authenticity verification
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-10 py-30 md:pt-60 pb-60 sm:pb-[320px] md:pb-[550px] relative">
          <div className="sm:w-8/10 md:w-6/10">
            <motion.h2
              className="tw-heading-4 md:tw-heading-3 mb-8 text-gradient"
              variants={transitions.item}
            >
              Processing over half a billion transactions daily, ICP unlocks many
              previously infeasible blockchain use cases, such as industry scale
              supply chain tracking or certification of origin.
            </motion.h2>
            <motion.p className="mb-0">
              <Link className="button-primary">REACH OUT</Link>
            </motion.p>
          </div>
          <img
            src="/img/enterprise/big-visual.svg"
            alt=""
            className="absolute w-[600px] max-w-none sm:max-w-full sm:w-auto bottom-0 sm:bottom-auto sm:top-5/12 md:top-3/10 sm:-right-3/10"
          />
        </section>
        <section className="bg-infinite relative overflow-hidden text-white">
          <div className="blob blob-white blob-sm md:blob-xl blob-x-7 blob-y-0"></div>
          <div className="container-10 mt-20 md:mt-40 md:w-6/10 md:mx-auto">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 text-center mb-0"
              variants={transitions.item}
            >
              Advantages of secure, autonomous cloud
            </motion.h2>
          </div>
          <div className="mb-20 md:mb-40 container-12 flex flex-col gap-16 md:gap-40 relative pt-20">
            <TranslatedLayout imageUrl="/img/enterprise/platform-risk-large.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Manage platform risk
              </h2>
              <p className="tw-lead-sm">
                Large scale software systems that rely on centralized cloud
                providers, risk being subject to vendor lock-in, having to
                dealing with increasing server costs or codebase refactoring.
              </p>
              <p className="tw-lead-sm mb-6 md:mb-10">
                The Internet Computer offers an alternative technology stack
                which is open and decentralized. It connects independent node
                machines to create a self-sovereign autonomous cloud on which
                any system can be built. Its software — canister smart contracts
                — are compiled to WebAssembly, the new W3 industry standard for
                cross platform, language agnostic, portable server executable
                code.
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/enterprise/self-custody-large.webp"
              reverse={true}
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Simple self-custody of digital assets
              </h2>
              <p className="tw-lead-sm mb-6 md:mb-10">
                Users of enterprise solutions often resort to giving up self
                custody of their data or digital assets, having to trust the
                service provider to appropriately and securely handle their
                data. Using canister smart contracts on the Internet Computer,
                organizations can simply deploy an architecture, in which all
                users have complete ownership and control of their data and
                digital assets. This separation is enabled by chain-key
                cryptography, and most importantly doesn’t require users to go
                through complicated configuring of their accounts.
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/enterprise/self-custody-large.webp"
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Built-in digital identity framework
              </h2>
              <p className="tw-lead-sm mb-6 md:mb-10">
                Internet Identity is a privacy-enhancing authentication framework
                native to the Internet Computer. Following the open standards of
                the FIDO Alliance and W3C, Internet Identity uses secure passkeys
                and WebAuthn. It can be seamlessly integrated with any service
                running on the Internet Computer, and provides user authentication
                without requiring the service provider to build out the infrastructure
                to securely and privately manage user credentials.
              </p>
              <p className="mb-0">
                <Link
                  href="/internet-identity"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  More on Internet Identity
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/enterprise/security-large.webp"
              reverse={true}>
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Leaner security teams
              </h2>
              <p className="tw-lead-sm">
                Building on ICP enables organizations to focus on the business
                logic of software, lowering costs and speeding up development.
              </p>
              <p className="tw-lead-sm">
                When the internet protocol (IP), and current cloud
                infrastructures were initially conceived, people didn’t foresee
                the scale, and impact the internet has today. The importance of
                robust security systems became apparent only later, as the
                number of connected devices grew.
              </p>
              <p className="tw-lead-sm">
                The Internet Computer was designed bottom up with security and
                privacy directly built into the protocol itself by a team of
                world class cryptographers, engineerings and computer
                scientists.
              </p>

              <p className="mb-0">
                <Link
                  href="/how-it-works"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  How ICP works
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/enterprise/security-large.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Tokenized business models
              </h2>
              <p className="tw-lead-sm">
                From loyalty programs to memberships to ticketing. Businesses
                need to manage their relationships with their customers via
                digital identities and handling of digital assets. The Internet
                Computer provides a common digital wallet that makes this
                collaboration much easier to build.
              </p>
              <p className="tw-lead-sm">
                Organizations can effectively include their customers in the
                product development life cycle by leveraging built-in tokenized
                voting tools that are native to the Internet Computer, incentivizing
                users to actively participate.
              </p>

            </TranslatedLayout>
          </div>
        </section>
        <section className="container-12 py-30 md:py-48">
          <div className="text-center mb-16 md:mb-30">
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              <motion.h2
                className="tw-heading-3 md:tw-heading-2 text-gradient text-center md:w-6/12 md:mx-auto mb-8"
                variants={transitions.item}
              >
                Enterprises adopting ICP
              </motion.h2>
            </AnimateSpawn>
          </div>

          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout imageUrl="/img/enterprise/italy-large.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                100% made in Italy
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
                FEDERITALY is a non-profit organization that promotes and
                protects Italian entrepreneurship. They are developing a
                solution on the Internet Computer to improve their “100% made in
                Italy” verification service. This removes the need for consumers
                to rely on services running on centralized cloud services, and
                greatly improves the transparency of the verification process.
                The “100% made in Italy” certificates are stored fully on-chain
                and protected by tamperproof smart contracts.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="https://swissfederalism.ch/en/brand-federitaly-100-made-in-italy-dfinity-foundation/"
              >
                <LinkArrowRight /> Read the announcement
              </Link>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/enterprise/nft-large.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                NFTs as employee rewards
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
                <Link className="link-subtle" href="">
                  Sodexo
                </Link>{" "}
                is a French food services and facilities management company with
                over 400,000 employees. They partnered with Yumi NFT Marketplace
                to modernize their employee reward program. They launched the X
                Collection, that employees can claim, giving them a unique
                digital collectible. As part of the program, Sodexo has pledged
                to donate to Stop Hunger for every NFT claimed.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="https://yumimarketplace.medium.com/introducing-the-x-collection-761f7cb64dec"
              >
                <LinkArrowRight /> More on the X Collection
              </Link>
            </TranslatedLayout>
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              <motion.div variants={transitions.container}>
                <Link
                  className="button-outline text-center"
                  href="/ecosystem"
                >
                  other businesses building on ICP
                </Link>
              </motion.div>
            </AnimateSpawn>
          </div>
        </section>
        <AnimateSpawn
          className="  bg-infinite overflow-hidden "
          variants={transitions.container}
          el={motion.section}
        >
          <div className="container-10 py-30 md:py-40 flex flex-col sm:flex-row text-white relative">
            <div className="blob blob-white blob-sm md:blob-xl blob-x-10 blob-y-3 md:blob-y-5"></div>
            <div className="flex-1 mt-40 sm:mt-0">
              <h2 className="tw-heading-4 md:tw-heading-3 mb-6">
                Want to run a pilot using ICP?
              </h2>
              <p className="tw-lead-sm md:tw-lead mb-6 md:mb-8">
                Committing to a new technology stack is a big decision. See the
                advantages of the Internet Comouter by running a pilot projects first.
              </p>
              <p className="mb-0">
                <Link className="button-white">get in touch</Link>
              </p>
            </div>
            <div className="flex-1 ">
              <img
                src="/img/enterprise/enterprise-learnmore-background-image.svg"
                alt=""
                loading="lazy"
                className="absolute top-0 right-0 left-0 max-w-md md:max-w-none sm:left-auto sm:-right-30"
              ></img>
            </div>
          </div>
        </AnimateSpawn>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 mt-40">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-sm blob-x-5 blob-y-7 z-[-1] md:blob-xl"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 text-center mb-2 w-full mx-auto md:tw-heading-60 md:mb-6 lg:w-6/12"
              variants={transitions.item}
            >
              Get familiar with the Internet Computer
            </motion.h2>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="Network dashboard"
              description=""
              href="https://dashboard.internetcomputer.org/"
            />

            <CardWithDescription
              title="Sample code"
              description=""
              href="/samples?selectedDomains=Asynchronous+DeFi"
            />
            <CardWithDescription
              title="Dev docs"
              description=""
              href="/docs/current/home"
            />
            <CardWithDescription
              title="How ICP works"
              description=""
              href="/how-it-works"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default EnterprisePage;
