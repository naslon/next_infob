export async function getServerSideProps() {
  try {
    const res = await fetch('https://felipetestefw.vercel.app/noticias');
    const text = await res.text(); // ← pega tudo como texto
    
    console.log("API RAW:", text);

    const repo = JSON.parse(text);

    return { props: { noticias: repo } };
  } catch (err) {
    console.error("ERRO NO SSR:", err);
    return { props: { noticias: [] } };
  }
}
