import ContactForm from "./components/ContactForm";

const Page = () => {
  return (
    <div className="flex flex-col gap-5 items-center ">
      <div className="bg-bgColour2 p-6 mt-4 shadow-sm w-5/6 md:w-1/2">
        <p>
          We love movies just as much as you do. That&#39;s why we&#39;re always
          here to help you explore the world of independent films. Have a
          question? Maybe you want to suggest a hidden gem of a cinema in your
          locality or an indie film that&#39;s left you awestruck. Whatever it
          is, we&#39;d love to hear from you. To get in touch simply fill out
          the form below with your contact details and your message.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
