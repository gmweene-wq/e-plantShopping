import heroBg from '../assets/hero.svg'
import './LandingPage.css'

export default function LandingPage({ onGetStarted }) {
  return (
    <main
      className="landing"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="landing-scrim" />

      <section className="landing-inner">
        <p className="landing-eyebrow">Indoor plants, grown with care</p>

        <h1 className="landing-title">Paradise Nursery</h1>

        <p className="landing-copy">
          We are a small nursery raising houseplants that are easy to love and
          hard to kill. Every plant is potted, checked, and hand picked before it
          ships, so the greenery that reaches your door is ready to settle in.
          From air purifiers to fragrant herbs and low fuss favourites, our
          collection is chosen to bring a little more life into everyday rooms.
        </p>

        <button className="btn btn-primary landing-cta" onClick={onGetStarted}>
          Get Started
        </button>

        <p className="landing-foot">Over 40 varieties, shipped nationwide.</p>
      </section>
    </main>
  )
}
