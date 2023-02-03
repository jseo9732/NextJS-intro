import NavBar from '../components/NavBar';
// 다른 컴포넌트에서는 globals.css import가 불가능 하지만 _app 파일에서는 가능하다.
// import "../styles/globals.css"

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
