import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>O Deal</title>
        <meta name="description" content="o deal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={styles.main}
        style={{ background: "white", color: "black" }}
      > <div style={{ height: "100px"   }}>
            <h1>O Deal</h1>
          </div>
        <div>
         <hr />
          <h1 style={{ marginTop: "20px" }}>Privacy Policy</h1>
          <h3 style={{ marginTop: "20px" }}>
            At o deal, we are committed to protecting the privacy and security
            of our users. This Privacy Policy explains the types of information
            we collect through our mobile application and website
            (www.odlapp.com) and how we use and protect it. By using o deal, you
            agree to this Privacy Policy and our Terms of Service. Information
            We Collect: Personal Information: We may collect personal
            information such as your name, email address, phone number, and
            location when you sign up for an account on o deal. Location
            Information: o deal uses your devices GPS to provide location-based
            services, such as suggesting nearby deals and businesses. You can
            disable location services for o deal at any time in your devices
            settings. Usage Information: We may collect information about how
            you use our app, including the types of deals and businesses you
            view, the frequency and duration of your usage, and other details
            about your interactions with the app. Device Information: We may
            collect information about the device you use to access o deal,
            including its type, operating system, and device ID. Use of
            Information: Providing and Improving Our Services: We use the
            information we collect to provide and improve our services, such as
            suggesting relevant deals and businesses, and to enhance the overall
            user experience. Marketing and Advertising: We may use your
            information to send you promotional offers and advertisements that
            may be of interest to you. We may also use your information to
            better target our advertising efforts. Analyzing and Improving Our
            App: We may use the information we collect to analyze usage patterns
            and make improvements to our app, such as fixing bugs and adding new
            features. Sharing of Information: Service Providers: We may share
            your information with third-party service providers who assist us in
            operating and providing our services, such as hosting, marketing,
            and analytics. Business Partners: We may also share your information
            with our business partners, who may use it to send you promotional
            offers and advertisements that may be of interest to you. Compliance
            with Laws and Legal Processes: We may disclose your information if
            we are required to do so by law, such as in response to a subpoena
            or court order, or to protect the rights, property, or safety of o
            deal, our users, or others. Data Security: We take reasonable
            measures to protect your information from unauthorized access, use,
            or disclosure. However, no data transmission or storage can be
            guaranteed to be 100% secure. You use o deal at your own risk and
            are responsible for maintaining the confidentiality of your password
            and account information. Changes to this Privacy Policy: We may
            update this Privacy Policy from time to time, and we encourage you
            to review it periodically. We will provide notice of any material
            changes by posting a notice on our app or website or by sending an
            email to the email address you have provided. Your continued use of
            o deal following the posting of any changes to this Privacy Policy
            constitutes your acceptance of such changes. Contact Us: If you have
            any questions about this Privacy Policy, please contact us at
            ads@odlapp.com.
          </h3>
        </div>
      </main>
    </>
  );
}
