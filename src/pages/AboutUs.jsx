import Logo from '../components/Logo'

const baseText =
  'text-[13px] leading-[1.8] text-[#444] [text-align:justify]'

const headingText =
  'my-[30px] mb-3 text-[13px] font-bold text-[#222]'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Minimal navbar: centered logo only */}
      <header className="border-b border-[#e6e6e6] bg-white">
        <div className="mx-auto flex h-[56px] max-w-[1232px] items-center justify-center px-5">
          <a href="/" aria-label="dubizzle home" className="inline-flex">
            <Logo width={110} height={26} />
          </a>
        </div>
      </header>

      <main className="bg-white">
        <div className="mx-auto max-w-[580px] px-5 py-10">
          {/* Section 1 */}
          <section className={baseText}>
            <h2 className="mb-3 text-[13px] font-bold text-[#222]">
              What is dubizzle:
            </h2>

            <p className="mb-4">
              dubizzle is the leading classifieds platform for users in the
              United Arab Emirates. Since its launch in 2005, dubizzle has
              become the number one platform for users to buy, sell, or find
              anything in their community.
            </p>

            <p className="mb-4">
              A community where underused goods are redistributed to fill a new
              need, and become wanted again, where non-product assets such as
              space, skills, and money are exchanged and traded in new ways that
              don&apos;t always require centralized institutions or middlemen.
              dubizzle is part of the Dubizzle Group Holdings Limited which also
              operates the largest property classified sites in Pakistan,
              Bangladesh and Morocco.
            </p>

            <p className="mb-4">
              In April 2020, the Dubizzle Group Holdings Limited merged with the
              Netherlands-based OLX Group in certain key markets, and was valued
              at $1 Billion, giving it the coveted unicorn status. The group now
              also owns and operates Bayut in the UAE, OLX Pakistan, OLX Egypt
              and OLX Lebanon, in addition to several other platforms in the
              broader Middle East region, including Saudi Arabia, Bahrain, Oman,
              Kuwait and Qatar.
            </p>

            <p className="mb-4">
              Now situated in the heart of Dubai Design District, Dubai&apos;s
              skyline may have changed, but dubizzle has not, and there is so
              much more to come.
            </p>

            <p className="my-6 text-center italic text-[#444]">
              If you need anything to buy or sell, all you need is dubizzle!
              Yalla, let&apos;s go.
            </p>
          </section>

          {/* Section 2 */}
          <section className={baseText}>
            <h2 className={`${headingText} text-center`}>Cars</h2>
            <p className="mb-4">
              Best place to sell your car. Over the past 15 years, dubizzle has
              grown to be the leading online car marketplace for buyers and
              sellers across the UAE. With daily viewership figures constantly
              surpassing new heights and over 20,000 cars listed on a monthly
              basis, dubizzle has been the best place to buy and sell used cars.
            </p>
            <p className="mb-4">
              Sell your car with dubizzle. Want to sell your car as fast as
              possible? dubizzle is the easiest and most cost-effective way to
              do this. Feature your ad and find the right buyer in no time.
            </p>
            <p className="mb-4">
              New and improved. We constantly strive to improve our platform to
              make your car browsing experience seamless. Type in the make and
              model you are looking for, filter as wide or narrow and save your
              search to find your dream car today.
            </p>
          </section>

          {/* Section 3 */}
          <section className={baseText}>
            <h2 className={`${headingText} text-center`}>dubizzle cars</h2>
            <p className="mb-4">
              Whatever you&apos;re buying or selling, dubizzle cars is here to
              help. From answering last price queries, and test-driving more
              cars, dubizzle cars is a hassle-free experience just for you. But
              the difference? It&apos;s much more than buying and selling; it&apos;s a
              car service for you.
            </p>
            <p className="mb-4">
              When buying a car in the UAE, getting it inspected is always good.
              With dubizzle cars, you can request a multi-point inspection on
              any car in the UAE. Book an inspection today to ensure your next
              car is worth buying.
            </p>
            <p className="mb-4">
              We also offer competitive finance and insurance rates thanks to
              our partners, bank-approved valuation certificates, and more
              value-added services to make your car buying and selling
              experience hassle-free.
            </p>
          </section>

          {/* Section 4 */}
          <section className={baseText}>
            <h2 className={`${headingText} text-center`}>Classifieds</h2>
            <p className="mb-4">
              Best place to buy and sell. Did you know that thousands of ads are
              placed daily every day, and on average, tens of thousands are
              looking to buy on dubizzle and even more are browsing dubizzle
              looking for the best deals in town. No matter the price, size or
              shape of the item, dubizzle is where to list and where to find it.
            </p>
            <p className="mb-4">
              Featuring an ad. Want to make the most out of your ad? Want to
              stand out easily from loads featuring your ad on dubizzle, you can
              expect up to 6x more leads than non-featured ads ensuring your
              item is shown to the right people and sells faster.
            </p>
            <p className="mb-4">
              Inside your dubizzle. Anything a post wishes to offer, purchases
              you can now easily adopt your favourites on dubizzle via fully
              licensed solicitations on dubizzle. Keep an eye out for the “Trust
              by dubizzle” badge. Listings contain information about the item,
              including brand, age, and condition.
            </p>
          </section>

          {/* Section 5 */}
          <section className={baseText}>
            <h2 className={`${headingText} text-center`}>dubizzle Property</h2>
            <p className="mb-4">
              DLD verified listings. With the help of historical data sourced
              from the Dubai Land Department (DLD), you will now see more
              information regarding property listings on dubizzle. Now you can
              view the property&apos;s transaction history, building information,
              and more.
            </p>
            <p className="mb-4">
              View your next home from home. Enjoy full videos of certain
              properties on dubizzle and get homely with your next home from the
              comfort of your home. Take a full tour without breaking a sweat,
              see every room and make sure to check details to see what really
              does or is present to impress yourself.
            </p>
            <p className="mb-4">
              Listings. Every week, hundreds of properties for rent and sale are
              listed, and they are all available for you to view with pictures,
              descriptions and more. No matter what you are looking for, be it a
              commercial property, a spacious apartment or a room to rent in the
              city, dubizzle is your next property.
            </p>
          </section>

          {/* Section 6 */}
          <section className={baseText}>
            <h2 className={`${headingText} text-center`}>dubizzle Jobs</h2>
            <p className="mb-4">
              On average, over 300,000 job seekers are using dubizzle on a daily
              basis. Find talented individuals from fresh graduates to 10+ year
              veterans in all fields on dubizzle.
            </p>
            <p className="mb-4">
              Did you know that you can browse waiting professionals&apos; CVs on
              dubizzle? Finding talents and motivated hires has never been this
              easy and they are all available at your fingertips.
            </p>
            <p className="mb-0">
              Are you finding the team and looking for a career change? Hundreds
              of job listings are posted daily on dubizzle, and they could be
              what you are looking for!
            </p>
          </section>

          {/* Bottom hashtag */}
          <p className="mt-10 text-center text-[12px] text-[#777]">
            #NoHustleNoBustle #dubizzleIt
          </p>
        </div>
      </main>
    </div>
  )
}

