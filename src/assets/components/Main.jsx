import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Personalize',
    text: 'Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!',
    img: '/img/steps/step-01.jpg',
  },
  {
    number: '02',
    title: 'Write & Understand',
    text: 'Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!',
    img: '/img/steps/step-02.jpg',
  },
  {
    number: '03',
    title: 'Alivio!',
    text: 'Now you are aware, and have a way to manage and overcome your own stress. What are you waiting for? Alivio today!',
    img: '/img/steps/step-03.jpg',
  },
]

const Main = () => {
  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="home-content">
            <h1 className="home-heading">Be aware, Manage well.</h1>

            <div className="home-text">
              <p>
                Everyone experiences stress in different ways. <br />
                <span className="emphasize">Let Alivio</span> guide you, in a personalized journal experience, to overcome your stress.
              </p>
            </div>

            <div className="home-btn">
              <a href="#!" className="btn btn-lg">Find Your Way</a>
            </div>
          </div>
        </div>

        <div className="home-bg-img">
          <img src="/img/home/bg.jpg" alt="Background cover" />
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works-header">
            <div className="how-it-works-header-head">
              <h2 className="how-it-works-title">How it works</h2>
              <h3 className="how-it-works-subtitle">
                Understand &amp; Release<br />
                the stress in 3 steps
              </h3>
            </div>

            <div className="how-it-works-header-content">
              <p>
                Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger,
                and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.
              </p>
            </div>
          </div>

          <div className="how-it-works-steps">
            {steps.map((step) => (
              <div className="step" key={step.number}>
                <h4 className="step-heading" data-number={step.number}>{step.title}</h4>

                <div className="step-text">
                  <p>{step.text}</p>
                </div>

                <div className="step-img-wrapper">
                  <img src={step.img} alt={`Step ${step.number} image`} className="step-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-row">
            <div className="story-content">
              <h2 className="story-heading">Let&apos;s hear about Kayla&apos;s success story</h2>

              <div className="story-text">
                <p>See how well Alivio works in a real customer&rsquo;s life.</p>
              </div>

              <div className="story-btn">
                <a href="#!" className="btn btn-lg">Let&rsquo;s get started</a>
              </div>
            </div>

            <div className="story-video">
              <img src="/img/story/video-cover.jpg" alt="Kayla's story" className="story-video-object" />

              <div className="story-video-overlay">
                <span className="story-video-btn">
                  <img src="/img/story/play-white.svg" width="82" height="82" alt="Play" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product">
        <div className="container">
          <div className="product-row">
            <div className="product-img-wrapper">
              <img src="/img/product/photo.jpg" alt="Alivio product" className="product-img" />

              <div className="product-card">
                <div className="card">
                  <h3 className="card-title">Customized For</h3>

                  <div className="card-avatar">
                    <div className="avatar">
                      <img src="/img/product/avatar.jpg" alt="Mikayla" className="avatar-img" />
                      <h4 className="avatar-name">Mikayla</h4>
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-content-title">Your custom contents</div>

                    <ol className="card-list">
                      <li>Understand Your Stress</li>
                      <li>Anger Management</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-content">
              <h2 className="product-content-title">Our product</h2>
              <h3 className="product-content-subtitle">
                You tell us your stress,<br />
                We make your diary
              </h3>

              <div className="product-content-text">
                <p>
                  Everyone experiences it, and in different ways. <br />
                  <span className="emphasize">Let Alivio</span> guide you, in a personalized journal experience, to overcome your stress.
                </p>
              </div>

              <div className="product-content-btn">
                <a href="#!" className="btn btn-lg">Find Your Way</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
