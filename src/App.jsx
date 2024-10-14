function App() {
  return (
  <>
   <main>
    <header>
      <div>
      <h2>Invoicer</h2>
      </div>

      <div>
        <ul>
          <li>Print</li>
          <li>Download</li>
          <li>Send</li>
        </ul>
      </div>
      </header>
         {/*End of header */}
         
{/* Your details */}
<section>
      <input type="text" name="text" id="text"
      placeholder="Enter your name" required/>
      
</section>
    {/* End of your details*/}
   </main>
  
  </>
  );
}

export default App;
