export default function Home() {

  const services = [
    "House Washing",
    "Driveway & Concrete Cleaning",
    "Roof Cleaning",
    "Gutter Cleaning",
    "Patio & Sidewalk Cleaning",
    "Fence Cleaning",
    "Commercial Washing",
    "Rust Removal"
  ]

  return (
    <main>

      <section style={{
        padding:"80px 40px",
        background:"#f7f9fc"
      }}>
        <img src="/logo.png" style={{maxWidth:220}} />

        <h1 style={{
          fontSize:56,
          marginTop:20
        }}>
          Patriotic Service. Powerful Results.
        </h1>

        <p style={{
          maxWidth:600,
          fontSize:20
        }}>
          Red White & Clean provides professional pressure washing and exterior
          cleaning for homes and businesses across the Kansas City area.
        </p>

        <a
          href="tel:8163194857"
          style={{
            display:"inline-block",
            marginTop:30,
            padding:"14px 24px",
            background:"#d61f2c",
            color:"white",
            borderRadius:8,
            fontWeight:"bold"
          }}
        >
          Call 816-319-4857
        </a>

      </section>


      <section style={{padding:"80px 40px"}}>

        <h2 style={{fontSize:40}}>Our Services</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:20,
          marginTop:30
        }}>

          {services.map(service => (
            <div key={service} style={{
              border:"1px solid #ddd",
              padding:24,
              borderRadius:12
            }}>
              <h3>{service}</h3>
            </div>
          ))}

        </div>

      </section>


      <section style={{
        padding:"80px 40px",
        background:"#14204a",
        color:"white"
      }}>

        <h2 style={{fontSize:40}}>
          Veteran Owned Pressure Washing
        </h2>

        <p style={{maxWidth:600}}>
          Serving Kansas City and surrounding areas with reliable exterior
          cleaning services for homes and businesses.
        </p>

      </section>

    </main>
  )
}
