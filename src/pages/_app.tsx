export default function App({ Component, pageProps }: any) {
  return (
    <div>
      <Component {...pageProps} />
      <span>hello</span>
    </div>
  );
}
