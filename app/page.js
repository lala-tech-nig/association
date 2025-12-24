import React from 'react'

const page = () => {
  return (
    <main>
      <header className="container header">
        <div className="logo">
          <div className="brand-mark">RP</div>
          <div>
            <div style={{fontWeight:800}}>Rotary Pilers And Coasters Association</div>
            <div style={{fontSize:12,color:'#475569'}}>Lagos State Chapter — ROPACA</div>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="container hero">
        <div className="hero-left">
          <div className="eyebrow">Under Development</div>
          <h1 className="title fade-in">Rotary Pilers And Coasters Association — Lagos</h1>
          <p className="lead">Building community, fellowship, and service through pilings and coaster activities across Lagos and Ogun states.</p>

          <div style={{display:'flex',gap:12}}>
            <button className="cta">Get Involved</button>
            <button className="secondary">Learn More</button>
          </div>

          <div className="stats">
            <div className="stat card">
              <strong>REG NO:</strong>
              8440693
            </div>
            <div className="stat card">
              <strong>Members</strong>
              120+
            </div>
            <div className="stat card">
              <strong>Chapters</strong>
              Lagos · Ogun
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div style={{position:'relative'}}>
            <div className="floating-blob"></div>
            <div style={{position:'absolute',left:28,top:28,width:260}} className="card">
              <h3 style={{margin:'0 0 8px 0'}}>Contact</h3>
              <p style={{margin:0,fontSize:14}}>Address — 5, Idi-oro Avenue Addo langbasa, Addo, Ajah, Lagos State</p>
              <p style={{margin:'8px 0 0 0',fontSize:14}}>Ogun Office — 88 Ilori Ijoko Road, Olori bus stop, Akute, Ogun State</p>
              <p style={{margin:'12px 0 0 0',fontSize:14}}><a href="mailto:ropaca788@yahoomail.com">ropaca788@yahoomail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <footer className="container footer">
        <div style={{display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap'}}>
          <div>
            <strong>Rotary Pilers And Coasters Association — Lagos State Chapter</strong>
            <div style={{marginTop:8}}>REG NO: 8440693</div>
          </div>

          <div className="contact-grid">
            <div className="card">
              <strong>Lagos Office</strong>
              <div style={{marginTop:6}}>5, Idi-oro Avenue Addo langbasa, Addo, Ajah, Lagos state</div>
            </div>
            <div className="card">
              <strong>Ogun Office</strong>
              <div style={{marginTop:6}}>88 Ilori Ijoko Road, Olori bus stop, Akute, Ogun state</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default page