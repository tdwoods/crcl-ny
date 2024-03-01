import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Header from "./ui/header"
import Footer from "./ui/footer"
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center space-y-16">
        <div className="bg-white">
          <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <p className="text-base font-semibold tracking-wider text-[#ff8b0d] uppercase">A community for change</p>
                  <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from the experts</h1>
                  <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>

                  <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                    Become a Member
                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>

                  <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p>
                </div>

                <div>
                  <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>






        <div className="bg-slate-200 text-center w-5/6 rounded-lg mt-20 p-24">
          <h1 className="text-[#ff8b0d] text-4xl"> Our Mission </h1>
          <p className="text-lg">CRCL mobilizes resourced young adults to engage in informed lifelong philanthropy, facilitates cross-class connection, and supports organizations working to achieve equity and justice.</p>

        </div>
        <div className="bg-[#ffedda] w-full flex flex-row">
          <div className='flex-1 flex flex-col w-1/2 '>
            <h3 className="text-[#ff8b0d] text-4xl">What is CRCL</h3>
            <p>CRCL is a nonprofit based in New York City partnering with organizations doing impactful work to help meet their fundraising goals. We achieve this by providing education and fostering connections among young resourced individuals. We believe that there are many individuals within this population who can be mobilized to donate on the right platform.</p>
            <Button>Our Story</Button>
          </div>
          <div className='flex-1 w-1/2'>
            <Image src="/crcl-logo-big.png"
              width={500}
              height={500}
              alt="Community Resource Collective Logo" />
          </div>
        </div>
        <div className="flex flex-row p-24 space-x-4">
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/our-team.jpeg"
                width={270}
                height={270}
              />
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-[#ff8b0d] text-large">Our Team</h4>
              <Button>Go To</Button>
            </CardFooter>
          </Card>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/our-partners.jpeg"
                width={270}
                height={270}
              />
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-[#ff8b0d] text-large">Our Partners</h4>
              <Button>Go To</Button>
            </CardFooter>
          </Card>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/meeting.jpeg"
                width={270}
                height={270}
              />
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-[#ff8b0d] text-large">Our Values</h4>
              <Button>Go To</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>

  );
}
