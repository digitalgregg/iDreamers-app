import "../styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <script>
                    {`!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
  n=window.pintrk;n.queue=[],n.version="3.0";var
  t=document.createElement("script");t.async=!0,t.src=e;var
  r=document.getElementsByTagName("script")[0];
  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', '2612584920763', {em: '<user_email_address>'});
pintrk('page');`}
                </script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        alt=""
                        src="https://ct.pinterest.com/v3/?event=init&tid=2612584920763&pd[em]=<hashed_email_address>&noscript=1"
                    />
                </noscript>
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Script
                async
                type="text/javascript"
                src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WCuDXq"
            ></Script>

            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-193587047-3"
            ></Script>

            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-193587047-3');
        `}
            </Script>

            <Script id="google-tag-manager">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9ZR5ZP')`}
            </Script>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
