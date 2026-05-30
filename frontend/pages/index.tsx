export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif',padding:'40px',maxWidth:'900px',margin:'0 auto'}}>
      <h1>KATARA Community Report</h1>
      <p>
        Open-source climate resilience and community reporting infrastructure.
      </p>

      <section style={{marginTop:'40px'}}>
        <h2>Community Flood Reporting</h2>
        <form style={{display:'flex',flexDirection:'column',gap:'16px',marginTop:'20px'}}>
          <input placeholder='Location' />
          <select>
            <option>Flood</option>
            <option>Blocked drainage</option>
            <option>Infrastructure damage</option>
          </select>
          <textarea placeholder='Describe the incident'></textarea>
          <button type='submit'>Submit Report</button>
        </form>
      </section>

      <section style={{marginTop:'50px'}}>
        <h2>Project Vision</h2>
        <p>
          KATARA aims to help vulnerable communities improve climate-risk visibility through open civic technology, multilingual accessibility, and community-centered reporting systems.
        </p>
      </section>
    </main>
  )
}
